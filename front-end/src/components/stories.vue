<template>
    
    <div> 
    <div class="container border my-2 p-3 text-center">
        <h4>{{astory.story}}</h4>
        <h6 class="d-flex justify-content-center text-muted"> -- {{astory.name}}</h6>
    </div>
        <button @click="getStories " id="goQuotes" class="btn btn-light"> Storytime? </button>
    <div>
        <i><small><p class="text-muted">have a story to tell? submit your 6 word story!</p></small></i>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Stories',
    data() {
        return {
            astory: {
                story:'',
                name:'',
            },
        }
    },
    created() {
    this.getStories();
    },
    methods:{
        // anotherStory(){
        // var chosenNumber = Math.floor(Math.random() * 6);
        // this.$root.$data.Story = this.$root.$data.stories.find(x => x.id ===chosenNumber).story;
        // this.$root.$data.chosenAuthor = "~" + this.$root.$data.stories.find(x => x.id ===chosenNumber).author;
        // },
        async getStories() {
        try {
            let response = await axios.get("/api/stories");
            this.astory = response.data.story;
            // this.$root.$data.chosenStory = this.astory.story;
            // this.$root.$data.chosenAuthor = this.astory.name;
            return true;
        } catch (error) {
            console.log(error);
        }
        },
    },
    // async deleteStory(story) {
    //   try {
    //     await axios.delete("/api/stories/" + story.id);
    //     this.getStories();
    //     return true;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // },
    // data() {
    // return {
    //   stories: [],
    //     }
    // },

}
</script>

<style scoped src="../assets/web-design-p.css"></style>

