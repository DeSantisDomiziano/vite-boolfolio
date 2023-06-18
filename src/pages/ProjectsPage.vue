<script>
import { store } from "../store"

export default {
   name: 'ProjectsPage',

   data() {
        return {
            store
        }
    },

   mounted() {
      store.get_all_projects(store.API + store.API_PROJECTS, store.projects)
   }
}
</script>


<template>
   <div class="container py-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
         <div v-for="project in store.projects" class="col">
            <div class="card h-100">
               <img class="card-img-top" :src="store.get_img(project.img_path)" alt="">
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