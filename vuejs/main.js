import voH from './header.js'
import voN from './navbar.js'
import voNew from './newmovies.js'
import voPopu from './popularmovies.js'
import voTop from './toprating.js'
import voF from './footer.js'
import voM1 from './m1.js'
import voM3 from './actor.js'
import voM2 from './moviesinf.js'
import voM4 from './searchMovies.js'
import Movies from './movies.js';
import List from './listmovies.js';

export default{
    data(){
            return {
                List,
                curContent:voM1
            }
    },
    
    components:{
        voH,
        voN,
        voNew,
       voPopu,
       voTop,
       voF,voM1,voM2,voM3,voM4
    },
    created() {
        this.loaddata();
    },
    methods: {
        async load(){
            const res=await fetch(`https://imdb-api.com/en/API/MostPopularTVs/${List.key_api}`);
            
            List.NewMovies=rs.items.map(obj=>new Movies(obj))
            
            List.NewMovies.splice(5)
            console.log(List.NewMovies)
            
         },loadon(){
          document.getElementById('Loading').style.display="block";
      },
      loadoff()
      { document.getElementById('Loading').style.display="none";
    },
        
         async loaddata_cui(){
            // const res=await fetch(`https://imdb-api.com/en/API/InTheaters/${List.key_api}`);
            var rs= fetch("./db/InTheaters.json")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                List.NewMovies=json.items.map(obj=>new Movies(obj))
                List.NewMovies.splice(5)
                List.NewMovies[1].isActive=true
            });
            fetch("./db/MostPopular.json")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                List.PopularMovies=json.items.map(obj=>new Movies(obj));
            List.PopularMovies.splice(15);
            List.PopularMovies[0].isActive=true
            List.PopularMovies[1].isActive=true
            List.PopularMovies[2].isActive=true
            });
            fetch("./db/250movies.json")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                List.TopMovies=json.items.map(obj=>new Movies(obj));
            List.TopMovies.splice(15);
            List.TopMovies[0].isActive=true
            List.TopMovies[1].isActive=true
            List.TopMovies[2].isActive=true
          
            });
            // 

            // // const resP=await fetch(`https://imdb-api.com/en/API/Top250Movies/${List.key_api}`);
            // const rsP=require('/db/MostPopular.json')
            // List.PopularMovies=rsP.items.map(obj=>new Movies(obj));
            // List.PopularMovies.splice(15);
            // List.PopularMovies[0].isActive=true
            

            // // const resT=await fetch(`https://imdb-api.com/en/API/Top250TVs/${List.key_api}`);
            // const rsT=require('/db/MostPopular.json')
            // List.TopMovies=rsT.items.map(obj=>new Movies(obj));
            // List.TopMovies.splice(15);
            // List.TopMovies[0].isActive=true
         },
         
         async loaddata(){
          this.loadon();
            const res=await fetch(`https://imdb-api.com/en/API/InTheaters/${List.key_api}`);
            const rs=await res.json();
            List.NewMovies=rs.items.map(obj=>new Movies(obj))
            List.NewMovies.splice(5)
            List.NewMovies[0].isActive=true

            const resP=await fetch(`https://imdb-api.com/en/API/Top250Movies/${List.key_api}`);
            const rsP=await resP.json();
            List.PopularMovies=rsP.items.map(obj=>new Movies(obj));
            List.PopularMovies.splice(15);
            List.PopularMovies[0].isActive=true
            List.PopularMovies[1].isActive=true
            List.PopularMovies[2].isActive=true
            

            const resT=await fetch(`https://imdb-api.com/en/API/Top250TVs/${List.key_api}`);
            const rsT=await resT.json();
            List.TopMovies=rsT.items.map(obj=>new Movies(obj));
            List.TopMovies.splice(15);
            List.TopMovies[0].isActive=true
            List.TopMovies[1].isActive=true
            List.TopMovies[2].isActive=true
            this.loadoff()
         },
        async select(id){
            this.loadon();
            console.log(id);
            const res=await fetch(`https://reqres.in/api/users/${id}`);
            const rs=await res.json();
            store.curP=new Person(rs.data);
            console.log(store.persons,'select')
            this.loadoff();
            this.curContent='voM2';

           
        },
        backhome(){
            List.currentContent='voM1'
        },
    
        
        async check(id){
          this.loadon();
            try {
                const res = await fetch(
                  // `actor.json`
                  // `https://imdb-api.com/en/API/InTheaters/`
                  `https://imdb-api.com/en/API/Name/${List.key_api}/${id}`
                );
                const data = await res.json();
                console.log(data,'data');
             List.actor = data;
             List.knownFor=List.actor.knownFor.map(obj=>new Movies(obj))
             console.log('know:',List.knownFor)
             for (let i = 0; i < List.knownFor.length; i++) {
                List.knownFor[i].isActive=true
             }
              } catch (err) {
                console.log(err);
              }
            this.loadoff();

            List.currentContent='voM3';
        }
        ,
        async MoviesInf(id){
            this.loadon();
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
                  this.loadoff();
                List.currentContent='voM2'
    
            },
            
            async searchApi(str){
                this.loadon();
                console.log('str',str);
                try {
                    let res = await fetch(
                      // `movie.json`
                      `https://imdb-api.com/en/API/SearchMovie/${List.key_api}/${str}`
                    );

                    console.log( `https://imdb-api.com/en/API/SearchMovie/${List.key_api}/${str}`,'key api')
                    let data = await res.json();
                    // let res1 = await fetch(
                    //   // `movie.json`
                    //   `https://imdb-api.com/en/API/SearchName/${List.key_api}/${str}`
                      
                    // );
                    
                    
                    // let data1 = await res1.json();
                    // let tenphim=data1.results.map(obj=>new Movies(obj));
                    
                    // let mov = data.results.map(obj=>new Movies(obj));
                    // List.searchMovies=Array.from(new Set(tenphim.concat(mov)))
                    List.searchMovies=data.results.map(obj=>new Movies(obj));
                    console.log("search",tenphim,mov,List.searchMovies)
                    
                    
                  } catch (err) {
                    console.log(err);
                  }
                  this.loadoff();
                List.currentContent='voM4'
                
            }
    },
    template:`
       <voH/>
       <div class="nabar_class">
            <voN @search="searchApi" @back="backhome" />
       </div>
        <div class="content">
        <component :is=List.currentContent @checkactor="check" @movieInf="MoviesInf"></component>
        </div>
    <voF>

    `
}

