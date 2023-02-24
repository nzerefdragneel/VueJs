import Movies from './movies.js';
import List from './listmovies.js';
export default {
    data(){
        return{
            
            List
        }
    },
    methods: {
      
           
    },
    
    template:`
    <div class="actor-container">
          <img :src="List.actor.image" style="height:auto;width:100%" alt="" />
          <p class="card-text">
          {{List.actor.name}}<br>
          {{List.actor.summary}}
          </p>
    </div>   
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
          <div class="carousel-inner" >
                <div class="carousel-item" v-for="(i,index) in List.knownFor":class="{active:i.isActive}" @click=$emit('movieInf',i.id) >
                <img class="d-block w-100" :src='i.image' >
                  <div class="carousel-caption d-none d-md-block">
                  </div>
                  <div class='hover-inf'>{{i.title}}({{i.year}})</div>
                </div>
            
          </div>
            
  </div>
        
    `
}