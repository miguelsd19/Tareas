<template>
   <v-dialog
    v-model="dialog"
    scrollable
    max-width="500px"
    >
    <v-card>
        <v-card-title>Añadir Proyecto</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 500px">
              <v-text-field
              label="Nombre"
              v-model="proyect.nombre"
              filled
              >
              </v-text-field>
              <v-text-field
              label="Fecha"
              v-model="proyect.fecha"
              filled
              >
              </v-text-field>
              <v-text-field
              label="hora"
              v-model="proyect.hora"
              filled
              >
              </v-text-field>
              <v-text-field
              label="Materia"
              v-model="proyect.materia"
              filled
              >
              </v-text-field>
              <v-select
              :items="priority"
              label="Prioridad"
              v-model="proyect.prioridad"
              filled
              >
              </v-select>
            
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
        <v-btn
              color="blue darken-1"
              text
              @click="dialog=false"
            >
             cerrar
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
                @click="save"
              
            >
                guardar
            </v-btn>    
        </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialog:false,
            priority:["Alta","Baja","Media"],
            proyect:{
                name:"",
                fecha:"",
                hora:"",
                prioridad:"", 
                materia:""

            }

            
        }
    },
    methods:{
        save(){
            if(this.mode === 1){
                this.$emit('guardar')
                this.dialog=false
            }
            if(this.mode === 2){
                this.$emit('editar')
                this.dialog=false
            }
        },
    }
}
</script>