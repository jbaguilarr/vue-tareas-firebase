import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: { nombre: '', id: ''}
  },
  mutations: {
    setTareas(state,tareas){
       state.tareas = tareas;
    },
    setTarea(state,payload){
        state.tarea = payload;
    },
    setEliminarTarea(state,payload){
       state.tareas = state.tareas.filter(item => item.id !== payload)
    }
  },
  actions: {
    getTareas({commit}){
      const tareas = [];
        db.collection('tareas').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                // console.log(doc.data());
                let tarea = doc.data();
                tarea.id = doc.id;
                tareas.push(tarea);
            })
            commit('setTareas',tareas);
          })
    },
    getTarea({commit},idTarea){
        db.collection('tareas').doc(idTarea).get()
        .then(doc => {
           let tarea = doc.data();
           tarea.id = doc.id;
           commit('setTarea',tarea);
        });
    },
    editarTarea({commit},tarea){
        db.collection('tareas').doc(tarea.id).update({
           nombre: tarea.nombre
        }).then(()=>{
          console.log('tareas editada')
          router.push('/')
        });
    },
    agregarTarea({commit},nombreTarea){
       db.collection('tareas').add({
         nombre: nombreTarea
       }).then(doc=>{
         console.log(doc.id)
         router.push('/')
       });
    },
    eliminarTarea({commit,dispatch},idTarea){
      db.collection('tareas').doc(idTarea).delete()
      .then(()=>{
        console.log('tarea eliminada')
        //dispatch('getTareas')
        commit('setEliminarTarea',idTarea)
      });
    }
  },
  modules: {
  }
})
