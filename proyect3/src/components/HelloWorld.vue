<template>

  <v-container>
    <h1 align="center" class="my-5">Administrador de Tareas</h1>

      
    <v-row class="px-3 pb-5 d-flex">
      <v-col cols="6" md= "12" align="end">
    <v-btn
      elevation="10"
      fab
      icon
      outlined
      color="#e0a100"
      @click="darkmode()"
      >
      <v-icon>
        mdi-moon-waxing-crescent
      </v-icon>
    </v-btn>
  
      </v-col>
    </v-row>

     <v-data-table
     :headers="headers"
     :search="search"
     :items="proyects"
     >

      <template v-slot:top >
       <v-toolbar flat color="white">
        <v-text-field v-model="search" label="Buscar" single-line class="mr-4"></v-text-field>
        <v-btn
        color="green"
        dark
        @click="add"
        >  Nueva Tarea
        </v-btn>
      </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        color="blue"
                >
                    <v-icon
                            small
                            class="detailIcon mr-2"
                            @click="show(item)"
                    >
                        mdi-eye
                    </v-icon>
                </v-btn>
            </template>
            <span>Detalles</span>
        </v-tooltip>
               
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        color="black"
                >
                    <v-icon
                            small
                            class="editIcon mr-2"
                            @click="edit(item)"
                    >
                        mdi-pencil
                    </v-icon>
                </v-btn>
            </template>
            <span>Editar</span>
            
        </v-tooltip>
               
    <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              color="red"
              >
             <v-icon 
             @click="deleteP(item)">
              mdi-delete
              </v-icon>
          </v-btn>
        </template>
        <span>Eliminar</span>
        </v-tooltip>
      </template>

     </v-data-table>
     
    
  <agregar ref="add" @guardar="save" @editar="edit1"></agregar>
  <detalles ref="detail" ></detalles>     
  </v-container>
</template>
<script>
import {mapActions,mapMutations,mapState} from 'vuex';
import axios from 'axios';
import agregar from '@/components/addProyect';
import ax from '@/store/modules/ax';
import detalles from '@/components/detailDialog';
import Swal from 'sweetalert2';
export default {
  data(){
    return{
      headers:[{text:"id", value:"_id"},
              {text:"Nombre", value:"nombre"},
              {text:"Fecha",value:"fecha"},
              {text:"Hora", value:"hora"},
              {text:"Prioridad", value:"prioridad"},
              {text:"Materia", value:"materia"},
              {text:"Acciones", value: "actions",sortable :false}],
        search:""
    }
  },
  components:{
    agregar,
    detalles
  },
  
  computed:{
        ...mapState("proyects", ["proyects"])
  },

  methods:{
        ...mapActions("proyects", ["getProyects", "deleteProyect"]),
        ...mapMutations("proyects",["setCurrentProyects"]),
    add(){
      console.log("Crear nuevo proyecto")
      this.$refs.add.dialog=true;
      this.$refs.add.mode=1;
    },
    show(proyect){
      this.$refs.detail.proyect=proyect
      console.log(proyect)
      this.$refs.detail.dialog=true;
    },
    save(){
      const data=this.$refs.add.proyect;
      const response = ax.add(data);
      this.proyects.push(response.data);
      console.log(response);
      window.location.href = '/';
    },
    edit(data){
      this.$refs.add.mode=2;
      this.$refs.add.dialog=true;
      this.$refs.add.proyect=data
    },
    edit1(){
      const data=this.$refs.add.proyect;
      const response=ax.edit(data);
      console.log(response);
      window.location.href = '/';

    },
    deleteP(item){
      Swal.fire({
        title: 'Estas Seguro?',
        text: "Una tarea eliminada no se puede recuperar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          //Alerta de eliminado
          Swal.fire(
            'Eliminado!',
            'La tarea ha sido eliminada.',
            'success'
          )
          //Eliminar de la BD
          try {
            const res =  axios.delete(`http://localhost:4000/tareas/${item._id}`);
            console.log(res);
            window.location.href = '/';
          } catch (error) {
            console.log(error);
          }
        }
      })
      
      
    },
    darkmode(){
      
    }
  },

  mounted(){
    this.getProyects()
  },
  updated(){
    this.getProyects()
  }
}
</script>
<style >
</style>