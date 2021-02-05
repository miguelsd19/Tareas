<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 ml-5"
          contain
          src="https://www.seekpng.com/png/full/197-1973284_cyberalliance-checklist-icon-1-1-converted-white.png"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 ml-5"
          contain
          src="https://cdn4.iconfinder.com/data/icons/logos-3/457/nodejs-new-white-512.png"
          transition="scale-transition"
          width="60"
        />
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 ml-5"
          contain
          src="https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png"
          transition="scale-transition"
          width="80"
        />

      </div>

    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
    <!-- <v-footer align="center" class="pt-5" dark>
      <v-text class="font-weight-bold"> Emmanuel Jimenez  -  Miguel Sanchez</v-text>
    </v-footer> -->
    <template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="lighten-1 white--text text-center"
    >
      <v-card-text>
        
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        href="https://github.com/miguelsd19"
                        target="_blank"
                        icon
                        v-bind="attrs"
                        v-on="on"
                        color="black"
                        class="mx-4 white--text"
                >
                    <v-icon size="30px"
                            class="mr-2"
                            @click="edit(item)"
                    >
                        mdi-github
                    </v-icon>
                </v-btn>
            </template>
            <span>Github Miguel Sanchez</span>
            
        </v-tooltip>

        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        href="https://github.com/EmmJim"
                        target="_blank"
                        icon
                        v-bind="attrs"
                        v-on="on"
                        color="black"
                        class="mx-4 white--text"
                >
                    <v-icon size="30px"
                            class="mr-2"
                            @click="edit(item)"
                    >
                        mdi-github
                    </v-icon>
                </v-btn>
            </template>
            <span>Gihthub Emmanuel Jimenez</span>
            
        </v-tooltip>

        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        href="https://www.linkedin.com/in/miguel-sanchez-ici/"
                        target="_blank"
                        icon
                        v-bind="attrs"
                        v-on="on"
                        color="black"
                        class="mx-4 white--text"
                >
                    <v-icon size="30px"
                            class="mr-2"
                            @click="edit(item)"
                    >
                        mdi-linkedin
                    </v-icon>
                </v-btn>
            </template>
            <span>Linkedin Miguel Sanchez</span>
            
        </v-tooltip>


        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        href="https://www.linkedin.com/in/emmanuel-jimenez-87bb44157/"
                        target="_blank"
                        icon
                        v-bind="attrs"
                        v-on="on"
                        color="black"
                        class="mx-4 white--text"
                >
                    <v-icon size="30px"
                            class="mr-2"
                            @click="edit(item)"
                    >
                        mdi-linkedin
                    </v-icon>
                </v-btn>
            </template>
            <span>Linkedin Emmanuel Jimenez</span>
            
        </v-tooltip>

      </v-card-text>

      

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — Emmanuel Jimenez - Miguel Sanchez - <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
  }),
};
</script>
