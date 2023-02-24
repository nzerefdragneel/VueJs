import Movies from './movies.js';
import List from './listmovies.js';
export default {
    data(){
        return{
            
            List
            
        }
    },
    methods: {
      async load(){
        const res=await fetch(`https://imdb-api.com/en/API/InTheaters/${List.key_api}`);
        const rs=await res.json();
        List.NewMovies=rs.items.map(obj=>new Movies(obj))
        List.NewMovies.splice(5)
        List.NewMovies[0].isActive=true
        
     },
     async prevPage(){
      let index=0
      for (let i = 0; i < 5; i++) {
          if (List.NewMovies[i].isActive===true){
            index=i;
          }
      }
      List.NewMovies[index].isActive=false
      index=index-1;
      if  (index<0){
        index=4
      }
      List.NewMovies[index].isActive=true
     },
     async nextPage(){
      let index=0
      for (let i = 0; i < 5; i++) {
          if (List.NewMovies[i].isActive===true){
            index=i;
          }
      }
      List.NewMovies[index].isActive=false
      index=index+1;
      if  (index>4){
        index=0
      }
      List.NewMovies[index].isActive=true
     },
     moviesInfor(i){
      List.movies=i;
      this.$emit('infor');
      console.log('ok',List.movies)
     }
    },
    template:`
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
            <ol class="carousel-indicators" >
              <li data-target="#carouselExampleIndicators" v-for="(i,index) in List.NewMovies" :class="{active:i.isActive}" ></li>
             
            </ol>
            <div class="carousel-inner" v-for="(i,index) in List.NewMovies" @click=$emit('movieInf',i.id)>
                <div class="carousel-item" :class="{active:i.isActive}" >
                  <img class="d-block w-50" :src='i.image' >
                    <div class="carousel-caption d-none d-md-block">
                          <h3>Title:{{i.title}} </h3>
                          <h3>Year:{{i.year}}</h3>
                          <h3>Rating:{{i.imDbRating}} </h3>
                          <h3>Time:{{i.runtimeStr}} </h3>
                    </div>
                    
                  </div>
               
              
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" @click='prevPage'>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" @click='nextPage'>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
    `
    

}