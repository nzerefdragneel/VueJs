import voH from './header.js'
import voN from './navbar.js'
import voNew from './newmovies.js'
import voPopu from './popularmovies.js'
import voTop from './toprating.js'
import voF from './footer.js'
import Movies from './movies.js';
import List from './listmovies.js';
export default{
    data(){
            return {
                List,
            }
    },
    
    components:{
        voH,
        voN,
        voNew,
       voPopu,
       voTop,
       voF
    },
    methods: {
        async fetchMovie(id) {
            
          },
          
       async MoviesInf(id){
        console.log('get')
            try {
                let res = await fetch(
                  // `movie.json`
                  `https://imdb-api.com/en/API/Title/${List.key_api}/${id}`
                );
                let data = await res.json();
                
                List.movies = data;
                res = await fetch(
                  // `movie.json`
                  `https://imdb-api.com/en/API/MetacriticReviews/${List.key_api}/${id}`
                );
                data.reviews = await res.json();
                List.review= data.reviews
                console.log('list:',data)
              } catch (err) {
                console.log(err);
              }
            List.currentContent='voM2'

        }
    },
    template:`
    <div class="slide-newmovies" >
    <voNew  @movieInf="MoviesInf" />
</div>


<div class="most-popular">
    <voPopu @movieInf="MoviesInf"/>
</div>

<div class="top-rating">
    <voTop @movieInf="MoviesInf"/>
</div>
    `
}
