<script>
import { store } from "../store";
export default {
   name: "AppHeader",

   data() {
      return {
         store 
      }
   }
}
</script>

<template>
   <nav class="navbar navbar-expand-sm">
      <div class="container text-center">
         <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
            <ul class="navbar-nav gap-5">
               <li class="nav-item" @click="store.active_nav(1)" :class=" store.active === 1 ? 'active' : '' " data-text="ABOUT ME">
                  <router-link class="nav-link text-uppercase fw-bold"
                  :to="{ name: 'home' }">
                     About Me 
                  </router-link>
               </li>
               <li class="nav-item" @click="store.active_nav(2)" :class=" store.active === 2 ? 'active' : '' " data-text="PROJECTS">
                  <router-link class="nav-link text-uppercase fw-bold" 
                  :to="{ name: 'projects' }">
                     Projects
                  </router-link>
               </li>
               <li class="nav-item" @click="store.active_nav(3)" :class=" store.active === 3 ? 'active' : '' " data-text="CONTACTS">
                  <router-link class="nav-link text-uppercase fw-bold" 
                  :to="{ name: 'contact' }">
                     Contacts
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<style lang="scss" scoped>
.navbar {
   height: 80px !important;
   font-size: 1.5rem;
}

</style>