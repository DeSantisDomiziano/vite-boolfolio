import axios from "axios"
import { reactive } from "vue"

export const store = reactive({
    /* DATA */
    loading: true,
    API: 'http://127.0.0.1:8000/',
    API_PROJECTS: 'api/projects',
    img_path: 'storage/',
    projects: null,
    project: null,

    /* METHODS */
    get_all_projects(url) {
        axios
           .get(url)
           .then(resp => {
               if (resp.data.success) {
                  this.projects = resp.data.projects
               }else {
                   this.$router.push({
                       name: 'not-found',
                   }) 
               }
           })
    },

    get_single_project(url) {
        axios
           .get(url)
           .then(resp => {
               if (resp.data.success) {
                  this.project = resp.data.project
               }else {
                   this.$router.push({
                       name: 'not-found',
                   }) 
               }
           })
    },

     get_img(img) {
        console.log(img);
        return this.API + this.img_path + img
     }
})