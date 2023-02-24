export default {
    data() {
        return {
            
        };
      },
      methods: {
        searchHandle(){
            this.$emit('search',this.str);
        },
        backhome(){
         
          this.$emit('back');
        }
      },
    template:`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#" @click='backhome'>Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            
              <form class="form-inline my-2 my-lg-0 f-search">
                <input class="form-control mr-sm-2" v-model="str" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" @click="searchHandle">Search</button>
              </form>
            
          </nav>
    
    `}