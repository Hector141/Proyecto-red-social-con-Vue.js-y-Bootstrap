import axios from 'axios';

const postsModule = {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, newPost) {
      state.posts.push(newPost);
    },
  },
  actions: {
    fetchPosts({ commit }) {
      axios.get("http://localhost:3001/reddatabase/posts").then((response) => {
        commit("setPosts", response.data);
      });
    },
    async createPost({ commit }, postData) {
      try {
        const response = await axios.post("http://localhost:3001/reddatabase/posts", postData);
        commit("addPost", response.data);
      } catch (error) {
        console.error('Error creating post:', error);
        throw error;
      }
    },
  },
};

export default postsModule;
