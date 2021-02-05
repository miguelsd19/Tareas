<template>
   <v-dialog
    v-model="dialog"
    max-width="400px"
    >
    <v-card>
        
        <v-card-title>Detalles</v-card-title>
        <v-divider></v-divider>
        <v-card-title>Nombre: </v-card-title>
        <v-list-item>
            <v-list-item-title>{{proyect.nombre}}</v-list-item-title>
        </v-list-item>

        <v-card-title>Fecha: </v-card-title>
        <v-list-item>
            <v-list-item-title>{{proyect.fecha}}</v-list-item-title>
        </v-list-item>
        
        <v-card-title>hora: </v-card-title>
        <v-list-item>
            <v-list-item-title>{{proyect.hora}}</v-list-item-title>
        </v-list-item>

        <v-card-title>Materia: </v-card-title>
        <v-list-item>
            <v-list-item-title>{{proyect.materia}}</v-list-item-title>
        </v-list-item>

        <v-card-title>Prioridad: </v-card-title>
        <v-list-item>
            <v-list-item-title>{{proyect.prioridad}}</v-list-item-title>
        </v-list-item>
        
            
        <v-divider></v-divider>
        <v-card-actions>
        <v-btn
              color="red"
              text
              @click="dialog=false"
            >
             cerrar
            </v-btn>
            
        </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            mode:"",
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