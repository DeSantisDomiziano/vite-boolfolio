<script>
export default {
   name: "AppHeader",
}
</script>

<template>
   <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container text-center">
         <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'home' }" aria-current="page">About Me <span class="visually-hidden">(current)</span></router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'projects' }">Projects</router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'contact' }">Contacts</router-link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<style lang="scss" scoped>
</style>