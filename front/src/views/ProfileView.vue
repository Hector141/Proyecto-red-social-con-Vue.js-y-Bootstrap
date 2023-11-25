
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const userId = ref(null);
const user = ref({});

const route = useRoute();

onMounted(async () => {
  userId.value = route.params.userId;
  await fetchUserData();
});

const fetchUserData = async () => {
  try {
    const response = await fetch(`http://localhost:3001/reddatabase/users/${userId.value}`); // Reemplaza con tu ruta real
    const userData = await response.json();
    user.value = userData;
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
  }
};
</script>

<template>
  <div class="profile-container">
    <div class="profile-column">
        <h2>{{ user.name}}</h2>
        <img :src="user.image" alt="Imagen de perfil" class="profile-image" />    
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
