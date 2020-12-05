<template>
    <div class="container">
        <img src='~../../public/Images/book.jpg' id="book" class='img-fluid my-2 img-size rounded contain' alt='cool book pic'>
        <div class="m-4">
        <em><p>"Great stories happen to those who can tell them."</p>
        <small><p>--Ira Glas</p></small></em>
        </div>
        <hr>
        <h4> Submit a 6 word story!</h4>
        <form v-if="creating" @submit.prevent="addStory">
          <textarea v-model="sixstory" placeholder="Type your story here"></textarea>
          <br>
          <input v-model="name" placeholder="Your name">
          <p></p>
          <button type="submit" class="btn btn-light">Submit</button>
        </form>
        <div v-else>
          <p>Thank you for submitting a story!</p>
          <p><a @click="toggleForm" href="#">Submit another story</a></p>
        </div>

    </div>
    

</template>
<script>
import axios from 'axios';
export default {
  name: 'SStories',
  data() {
    return {
      creating: true,
      name: '',
      sixstory: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    async addStory() {
      try {
        await axios.post("/api/stories", {
          name: this.name,
          story: this.sixstory
        });
        this.name = "";
        this.sixstory = "";
        this.creating = false;
        return true;
      } catch (error) {
        console.log(error);
      }

    },
  },
  components: {
  }
}


</script>

