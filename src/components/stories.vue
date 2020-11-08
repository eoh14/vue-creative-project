<template>
    
    <div> 
    <div class="container border my-2 p-3 text-center">
        <h4>{{this.$root.$data.chosenStory}}</h4>
        <h6 class="d-flex justify-content-center"> {{this.$root.$data.chosenAuthor}}</h6>
    </div>
        <button @click="anotherStory " id="goQuotes" class="btn btn-light"> Storytime? </button>
    <div>
        <i><small><p class="text-muted">stories taken from sixwordstories.net</p></small></i>
    </div>
    </div>
</template>

<script>

export default {
    name: 'Stories',
    props: {
        stories: Array
    },
    methods:{
        anotherStory(){
        var chosenNumber = Math.floor(Math.random() * 6);
        this.$root.$data.chosenStory = this.$root.$data.stories.find(x => x.id ===chosenNumber).story;
        this.$root.$data.chosenAuthor = "~" + this.$root.$data.stories.find(x => x.id ===chosenNumber).author;
        },
    },
}
</script>

<style scoped src="../assets/web-design-p.css"></style>