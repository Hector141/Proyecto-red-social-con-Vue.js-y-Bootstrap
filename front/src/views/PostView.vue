<script setup>
import CardComp from '../components/CardComp.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { RouterLink } from 'vue-router';

const store = useStore();
const posts = computed(() => store.state.posts.posts);
const users = computed(() => store.state.user.users);
const currentUser = computed(() => store.state.user.user);

const loadPosts = async () => {
  await store.dispatch('posts/fetchPosts');
};

const getUserNameAndImage = (userId) => {
  let userName = 'Usuario desconocido';
  let userImage = 'imagen_por_defecto.jpg';
  for (const user of users.value) {
    if (user.id == userId) {
      userId= user.id;
      userName = user.name;
      userImage = user.image;
      break;
    }
  }

  return { name: userName, picture: userImage, userId: userId };
};

onMounted(async () => {
  await loadPosts();
});

const reversedPosts = computed(() => {
  // Devuelve los posts en orden inverso
  return posts.value.slice().reverse();
});

</script>

<template>
  <div class="posts">
    <div class="header-cont">
      <img src="../assets/imgs/proyect1.svg" alt="logoPost" class="logo" />
    <RouterLink class="router" v-if="currentUser" to="/post"><button  class="btn-post btn btn-primary">Postear Algo</button></RouterLink>
    </div>

    <CardComp
      v-for="post in reversedPosts"
      :key="post.id"
      :header="getUserNameAndImage(post.UserId)"
      class="mt-2 mx-auto single-post"
      :parrafo="post.title"
      :likes=" Number(post.likes) || '0'"
      :picture="post.image"
      :userId="post.UserId"
    />
  </div>
</template>

<style scoped>

.router:hover{
  background-color: transparent;
}
.header-cont{
  display: flex;
  justify-content: space-between;
}
.btn-post{
  font-weight: 700;
  margin-top: 45px;
  margin-right: 60px;
}
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
}


@media (max-width: 800px) {
  .btn-post{
    margin-right: 0px;
}
 }
</style>
