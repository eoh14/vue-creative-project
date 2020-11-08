<template>
<div class="home">
  <div class="container">
      <img src='~../../public/Images/e-work.png' id="flag" class='img-fluid my-2 img-size rounded' alt='a picture of eriene'>
  </div>
  <div>  
  <Story></Story>
  </div>
</div>
</template>

<script>
import Story from "../../src/components/stories.vue"

export default {  
  name: 'Home',
  components:{
    Story
  },
	// data() {
	// 	return {
	// 		quote : ""
	// 	}
	// },
	// methods : {
	// 	async getRandomQuote() {
  //     var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
	// 		var apiUrl = proxyUrl + "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?"
	// 		let response = await fetch(apiUrl)
	// 		return await response.json()
	// 	},
	// 	async generateQuote() {
	// 		var randomQuote = await this.getRandomQuote()
	// 		if(randomQuote) {
	// 			this.quote = randomQuote.shift()
	// 		}
	// 	}
	// },
	// mounted() {
	// 	this.generateQuote()
	// }
  
}

</script>


<style scoped>
.blue-yellow{
        background-color: #52ACFF;
        background-image: linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%);
      }
      .orange-yellow{
        background-color: #FFE53B;
        background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
      }
      .purple-blue{
        background-color: #21D4FD;
        background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
      }
      .sky-bleu{
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
      }
      .green-blue{
        background-color: #FA8BFF;
        background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
      }
      .pink{
        background-color: #FFDEE9;
        color: #FFDEE9;
        background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
      }
     .full-width{
       width: 100%
     }
     .progress-linear{
       margin-top: 0
     }
     .progress-linear-holder{
      top: 0px;
      width: 100%;
     }
     .quote-content{
       font-family: 'Pacifico', Arial, sans-serif;
       font-size: 2rem 
     }
     .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
      }
      .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }

</style>