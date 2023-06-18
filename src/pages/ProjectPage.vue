<script>
import axios from "axios";
import { store } from "../store";

export default {
   name: 'ProjectsPage',

   data() {
      return {
         store
      }
   },

   mounted() {
       store.get_single_project(store.API + store.API_PROJECTS  + "/" + this.$route.params.slug)        
   }
}
</script>


<template>
    <div class="container py-5 text-center">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="card h-100 px-0 m-auto" v-if="store.project">
               <img class="card-img-top" :src="store.get_img(store.project.img_path)" alt="">
               <div class="card-body">
                  <h2>
                     {{ store.project.title }}
                  </h2>
                  <p>
                     {{ store.project.overview }}
                  </p>
               </div>
               <div class="card-footer d-flex justify-content-between px-2">
                  <p>
                     <a :href="store.project.link_code">Link Code</a>
                  </p>
                  <p>
                     <a :href="store.project.link_website">Link WebSite</a>
                  </p>
               </div>
            </div>
            <div v-else>
              nada
            </div>
      </div>
   </div>
</template>


<style lang="scss" scoped>

</style>