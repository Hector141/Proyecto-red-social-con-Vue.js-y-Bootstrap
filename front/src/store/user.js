import axios from 'axios';

const userModule = {
  namespaced: true, // Define el espacio de nombres del módulo
  state: {
    user: null, // Usuario logueado
    users: [], // Lista de usuarios
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    loginUser({ commit }, user) {
      // Realiza la autenticación y, si es exitosa, guarda el usuario en el estado.
      commit('setUser', user);
    },
    // Agrega una acción para cargar la lista de usuarios
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('http://localhost:3001/reddatabase/users');
        commit('setUsers', response.data); // Guarda todos los usuarios en el estado
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    },    
  },
};

export default userModule;
