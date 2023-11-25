<template>
    <nav class="navbar navbar-expand-lg  bg-primary">
  <div class="container justify-content-evenly">


          <RouterLink to="/" class="nav-link" :class="{active :activePath.home}" aria-current="page" >
            <span class="material-icons-round">
home
</span>
          </RouterLink>

          <RouterLink to="/about" class="nav-link" :class="{active :activePath.about}" >
            <span class="material-icons-round">
info
</span>
          </RouterLink>


          <RouterLink to="/posts" class="nav-link" :class="{active :activePath.post}" >
            <span class="material-icons-round">
featured_play_list
</span>
          </RouterLink>



    </div>
</nav>
</template>

<script>

export default{
  name:"NavComp",
  computed: {
    activePath(){
      if(this.$route.path === "/"){
        return {
          home:true,
          about:false,
          post:false
        }
      } else if(this.$route.path === "/about"){
        return {
          home:false,
          about:true,
          post:false
        } 
      }
        else if(this.$route.path === "/posts"){
        return {
          home:false,
          about:false,
          post:true
        }
      }
      else {
        return{
          home:false,
          about:false,
          post:false
        }
      }
    }
  }
}



</script>


<style>
.navbar{
  max-width: 100%;
}

.material-icons-round{
  color: white;
  font-size: 1.4em;
  padding: 0.3em;
  border-radius: 50%;
  margin: 0.1em;
}

.material-icons-round:hover{
  background-color: rgba(128, 128, 128, 0.26);
}


.nav-link:hover{
  background-color:transparent;

}

.active .material-icons-round{
  background-color: rgba(128, 128, 128, 0.26);
  border: 1px solid rgba(248, 244, 244, 0.342);
}

</style>