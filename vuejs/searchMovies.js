import Movies from './movies.js';
import List from './listmovies.js';
export default {
    data(){
        return{
            List,
        }
    },
    methods: {
        
    },
    template:`
    <div class="search-movies">
    <div class="movie-list" >
    <div class="movie-card" v-for="(i,index) in List.searchMovies" @click=$emit('movieInf',i.id) >
    <img class="d-block w-100" :src='i.image'>
    
      <div class='hover-inf' style="display:block">
      {{i.title}}<br />
      {{i.description}}
      </div>
    </div>

</div>
    </div>
    `

}