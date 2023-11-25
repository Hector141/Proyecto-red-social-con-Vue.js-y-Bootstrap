<template>
  <div class="create-post-container">
    <h2>Create a New Post</h2>
    <form @submit.prevent="createPost" class="create-post-form">
      <label for="image">Image URL:</label>
      <input type="text" v-model="imageUrl" required class="input-field" />

      <label for="title">Title:</label>
      <input type="text" v-model="title" required class="input-field" />

      <button type="submit" class="create-post-button">Create Post</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const imageUrl = ref('');
const title = ref('');
const userId = store.state.user.user.user.id;

const createPost = async () => {
try {
  await store.dispatch('posts/createPost', {
    UserId: userId,
    image: imageUrl.value,
    title: title.value,
  });
} catch (error) {
  console.error('Error creating post:', error);
}
};
</script>

<style scoped>
.create-post-container {
  max-width: 600px;
  margin: 150px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.create-post-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.create-post-button {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.create-post-button:hover {
  background-color: #45a049;
}
</style>

