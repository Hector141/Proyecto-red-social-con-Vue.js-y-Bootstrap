<script setup>
import CardComp from '../components/CardComp.vue';

</script>

<template>
  <div class="posts container">
    <img src="../assets/imgs/proyect1.svg" alt="logoPost" class="logo">
    <CardComp :header="{ name: 'Alejo Roda', picture: 'https://randomuser.me/api/portraits/men/82.jpg' }"
      class="mt-2 mx-auto single-post" parrafo="xd negreto" likes="si"
      picture="https://i.ytimg.com/vi/4vbnmceyQj8/maxresdefault.jpg" />
    <CardComp :header="{ name: 'Juand Cruz Segundo', picture: 'https://randomuser.me/api/portraits/men/76.jpg' }"
      class="mt-2 mx-auto single-post" parrafo="Sample text" likes="si"
      picture="https://i.ytimg.com/vi/5BsCge_PUqc/maxresdefault.jpg" />
    <CardComp :header="{ name: 'Benjamin szodo', picture: 'https://randomuser.me/api/portraits/men/51.jpg' }"
      class="mt-2 mx-auto single-post" parrafo="Usan android? 🤢.que pobreza gente. yo tengo mi aifon 10 uwu" likes="si"
      picture="https://i.ytimg.com/vi/w_GgYte-Udw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD8xIGHmLhWcWE_0vzfaojL1V01Hg" />
  </div>
</template>


<style scoped>
.posts {
  min-height: 60vh;
  max-width: 895px;
  margin: auto;
}

.logo {
  max-width: 215px;
  padding: 0.2rem;
}

.single-post {
  max-width: 650px;
}</style>