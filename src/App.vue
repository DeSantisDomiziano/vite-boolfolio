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
      }
   },

   methods: {
      get_projects(url) {
         axios
         .get(url)
         .then(resp => {
            console.log(resp)
         })
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
</template>

<style lang="scss"></style>
