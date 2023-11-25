<script>
export default {
  name: "ProfileView",
  computed: {
    user() {
      // Acceder al estado de usuario desde Vuex usando this.$store
      return this.$store.state.user;
    },
  },
};
</script>


<template>
  <div class="profile-container">
    <div class="profile-column">
      <template v-if="user.user">
        <h2>{{ user.user.user.name }}</h2>
        <img :src="user.user.user.image" alt="Imagen de perfil" class="profile-image" />
      </template>
      <template v-else>
        <h2>Todavía no has iniciado sesión</h2>
      </template>
    </div>
    <div class="posts-column">
      <h1>Posts</h1>
      <!-- Agrega aquí la lógica para mostrar los posts -->
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
}

.profile-column {
  flex: 1;
  max-width: 33%;
  padding: 20px;
  box-sizing: border-box;
  min-height: 78vh;
  margin: 20px;
  border: 1px solid black;
  border-radius: 5px;
}

.posts-column {
  flex: 2;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  min-height: 78vh;
  margin: 20px;
  box-sizing: border-box;
}

.profile-image {
  max-width: 250px;
  max-height: 250px;
  border-radius: 10px;
  margin-top: 20px;
  border: 2px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
