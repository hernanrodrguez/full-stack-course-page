$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
});

new Vue({
  el: '#vue',
  data () {
    return{
      countries:['']
    }
  },
  methods:{
    async getJSON(){
      try{
        const resPost = await axios('https://restcountries.eu/rest/v2/all');
        for (let i=0; i<resPost.data.length; i++)
          this.countries.push(resPost.data[i].name);
      } catch(error){
        console.log(error);
      }
    }
  },
  mounted(){
    this.getJSON();
  } 
})



  