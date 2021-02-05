import axios from "axios";

export default{
    namespaced: true,
    state: {
        proyects:[],
        currentProyect:{}
      },
      mutations: {
        setProyect(state,payload){
          state.proyects=payload;
        },
        setCurrentProyect(state,payload){
          state.currentProyect=payload;
        }
      },
      actions: {
        async getProyects({ commit, state }) {
          try {
              if (state.proyects.length === 0) {
                  const res = await axios.get("http://localhost:4000/tareas");
                  commit('setProyect', res.data);
              }
          } catch (error) {
              console.error(error);
          }
      },
      // deleteProyect(id){
      //   // const {_id} = item;
      //   console.log(id);
        
      //   // try {
      //   //   const res = await axios.delete("http://localhost:4000/tareas/601ca9ac0d97f34740c18f81");
      //   //   commit('setProyect', res.data);
      //   // } catch (error) {
      //   //   console.log(error);
          
      //   // }
      // }
    },
}