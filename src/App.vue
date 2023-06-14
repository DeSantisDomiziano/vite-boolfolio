<script>

import axios from "axios";
import AppHeader from "./components/AppHeader.vue";

export default {
   components: {
      AppHeader,
   },

   data() {
      return {
         loading: true,
         API: 'http://127.0.0.1:8000/',
         API_PROJECTS: 'api/projects',
         img_path: 'storage/',
         projects: null,
      }
   },

   methods: {
      get_projects(url) {
         axios
         .get(url)
         .then(resp => {
            console.log(resp.data.projects)
            this.projects = resp.data.projects
         })
      },

      get_img(img) {
         return this.API + this.img_path + img
      }
   },

   mounted() {
      console.log(this.API + this.API_PROJECTS);
      this.get_projects(this.API + this.API_PROJECTS)
   }
}

</script>

<template>
   <AppHeader></AppHeader>

   <div class="container py-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
         <div v-for="project in projects" class="col">
            <div class="card h-100">
               <img class="card-img-top" :src="get_img(project.img_path)" alt="">
               <div class="card-body">
                  <h2>
                     {{ project.title }}
                  </h2>
                  <p>
                     {{ project.overview }}
                  </p>
               </div>
               <div class="card-footer d-flex justify-content-between">
                  <p>
                     {{ project.link_code }}
                  </p>
                  <p>
                     {{ project.link_code }}
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss"></style>
