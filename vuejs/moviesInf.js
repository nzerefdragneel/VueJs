import Movies from './movies.js';
import List from './listmovies.js';
export default {
    data(){
        return{
            
            List
            
        }
    },
    
    template:`
    <div class="movie-container">
          <img :src="List.movies.image" style="height:auto;width:100%" alt="" />
          <p class="card-text">
          
            <h2>{{List.movies.fullTitle}}</h2>
            <br />
           <div class="not-enter">
           Actor:
           <div v-for="item in List.movies.actorList" @click=$emit('checkactor',item.id)>{{item.asCharacter}},</div></div>
            IMDB: {{List.movies.imDbRating}}<br />
            Year: {{List.movies.year}}<br />
            Genres: {{List.movies.genres}}
            Stars: {{List.movies.stars}}<br />
            Awards: {{List.movies.awards}}<br />
            Directors: {{List.movies.directors}}<br />
            Plot: {{List.movies.plot}}<br />
            
          </p>
        </div>
        
        <div class="movie-comments">
        
        <div class="card" v-for="review in List.review.items.slice(0,4)">
          <div class="card-header">
            {{review.publisher}}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>{{review.content}}</p>
              <footer class="blockquote-footer">Rate: {{review.rate}}</footer>
            </blockquote>
          </div>
        </div>
      </div>
        
    `
}