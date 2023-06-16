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
         project: null,
      }
   },

   methods: {
      get_projects(url) {
         axios
            .get(url)
            .then(resp => {
               if (resp.data.success) {
                   console.log(resp.data.project);
                   this.project = resp.data.project
            }else {
                 this.$router.push({
                    //page not found
                }) 
                console.log('nada');
            }
            //this.project = resp.data.project
            })
      },

      get_img(img) {
         return this.API + this.img_path + img
      }
   },

   mounted() {
       this.get_projects(this.API + this.API_PROJECTS  + "/" + this.$route.params.slug)        
   }
}
</script>


<template>
    <div class="container py-5 text-center">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="card h-100 px-0 m-auto" v-if="project">
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
                  <a :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary mt-5">
                     Show Project
                  </a>
                  <p>
                     <a :href="project.link_website">Link WebSite</a>
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