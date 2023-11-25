<template>
    <div class="create-user">
      <h1>Create User</h1>
      <form @submit.prevent="createUser">
        <div>
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div>
          <label for="image">Image URL:</label>
          <input v-model="image" type="url" id="image" required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input v-model="name" type="text" id="name" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Sign In
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: "",
        image: "",
        name: "",
        password: "",
      };
    },
    methods: {
      async createUser() {
        try {
          const userData = {
            email: this.email,
            image: this.image,
            name: this.name,
            password: this.password,
          };
  
          const response = await axios.post("http://localhost:3001/reddatabase/users", userData);
  
          console.log('User created successfully:', response.data);
        } catch (error) {
          console.error('Error creating user:', error);
          throw error;
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  .create-user {
    max-width: 400px;
    margin: 150px auto 100px;
    padding: 20px;
    border: 1px solid #ddd; 
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px; 
    margin-bottom: 16px;
    border: 1px solid #ccc; 
    border-radius: 4px;
    box-sizing: border-box; 
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
    font-size: 16px; 
  }
  
  button:hover {
    background-color: #45a049; 
  }
  
  </style>