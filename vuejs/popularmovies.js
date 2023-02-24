import Movies from './movies.js';
import List from './listmovies.js';
export default {
    data(){
        return{
          List
        }
    },
    methods: {
      async prevPage(){
        let index=0
        for (let i = 0; i < 15; i++) {
            if (List.PopularMovies[i].isActive===true){
              index=i;
            }
        }
        List.PopularMovies[index].isActive=false
        index=index-3;
        if  (index<0){
          index+=15
        }
        List.PopularMovies[index].isActive=true
       },
       async nextPage(){
        let index=0
        for (let i = 14; i >=0; i--) {
            if (List.PopularMovies[i].isActive===true){
              index=i;
            }
        }
        List.PopularMovies[index].isActive=false
        index=index+3;
        if  (index>15){
          index-=15
        }
        List.PopularMovies[index].isActive=true
       },
       
       
    },

    template:`
    
    <h2>Most popular</h2>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
        
          <div class="carousel-inner" >
                <div class="carousel-item" v-for="(i,index) in List.PopularMovies":class="{active:i.isActive}" @click=$emit('movieInf',i.id) >
                <img class="d-block w-100" :src='i.image' >
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                  <div class='hover-inf'>{{i.title}}({{i.year}})</div>
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