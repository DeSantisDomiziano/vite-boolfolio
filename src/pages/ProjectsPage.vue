<script>
import axios from "axios";

export default {
   name: 'ProjectsPage',

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
         console.log(img);
         return this.API + this.img_path + img
      }
   },

   mounted() {
      this.get_projects(this.API + this.API_PROJECTS)
   }
}
</script>


<template>
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
               <div class="card-footer d-flex justify-content-between px-2">
                  <p>
                     <a :href="project.link_code">Link Code</a>
                  </p>
                  <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary mt-5">
                     Show Project
                  </router-link>
                  <p>
                     <a :href="project.link_website">Link WebSite</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<style lang="scss" scoped>

</style>