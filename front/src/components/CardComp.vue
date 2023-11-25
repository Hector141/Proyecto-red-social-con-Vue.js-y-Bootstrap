<template>
  <div class="card">
    <card-header v-if="header" :header="header"></card-header>
    <div class="card-body">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <p v-if="parrafo" class="card-text">{{ parrafo }}</p>
      <img v-if="picture" :src="picture" alt="post img">
      <ListGroup v-if="likes" :likes-count="likes" @like="handleLike" />
      <slot></slot>
      <div class="d-grid gap-2">
        <button
          v-for="btn in btns"
          :key="btn.txt"
          class="btn"
          :class="btn.class"
        >
          {{ btn.txt }}
        </button>
        <slot name="card-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from './CardHeader.vue';
import ListGroup from './ListGroup.vue';

export default {
  components:{ CardHeader, ListGroup },
  name: "CardComp",
  props: ["title", "parrafo", "btns", "picture", "header", "likes", " userId"],
  methods: {
    async handleLike() {
      this.likes += 1;

      try {
        const postId = this.postId; 

        await axios.put(`http://localhost:3001/reddatabase/posts/${postId}`);

      } catch (error) {
        console.error('Error al enviar la solicitud PUT al backend:', error);
      }
    },
  },
};
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}

.card img{
  max-width: 100%;
}




</style>
