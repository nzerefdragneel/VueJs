import Movies from './movies.js';
import List from './listmovies.js';
export default {
    data(){
        return{
            List
        }
    },
    template:`
    <div class="text-center header">
            <div class="mssv">20120567</div>

            <h1>Movies info</h1>
            <div class="dark-mode">
                <div class='key-api'>{{List.key_api}}</div>
                <div class='dark_m'>

                <input type="checkbox" class="checkbox" id="checkbox">
                  <label for="checkbox" class="label">
                    <i class="fas "></i>
                    <i class='fas '></i>
                    <div class='ball'>
                  </label>
                  
                
                <div>Dark-mode</div>
                </div>
            </div>
          </div>
    `

}