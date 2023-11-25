<script>
import CardComp from "../components/CardComp.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    CardComp,
  },

  data() {
    return {
      btnArray: [
        {
          txt: "Olvidaste tu contraseña?",
          class: "",
        },
      ],
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3001/reddatabase/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.data) {
            this.$store.dispatch('user/loginUser', response.data);
            console.log("Usuario autenticado. ¡Bienvenido!");

            // Redirige al usuario a la página de posts
            this.$router.push('/posts');
          }
        })
        .catch((error) => {
          console.error("Usuario no encontrado. Verifica tus credenciales.");
        });
    },
  },
};
</script>






<template>
  <div class="home">
    <div class="row mx-0">
      <div class="col-lg-6">
        <div class="img-cont">
          <img alt="pageLogo" src="../assets/imgs/proyect1.svg" />
          <h2 class="text-center text-lg-start">
            Conéctate con tus amigos y todo el mundo suando Facelook
          </h2>
        </div>
      </div>
      <div class="col-lg-6">
        <card-comp class="mx-auto card-comp" :btns="btnArray">
          <!--lo colocamos asi para que si ponemos cualquier otra etiqueta aca, se agrege en el slot del componente-->
          <template #default>
            <!-- ponemos donde queremso insertarlo, es decir el nombre del slot-->
            <form @submit.prevent="login">
              <div class="mb-3 mt-2">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Ingresa tu mail..."
                  v-model="email"
                />
              </div>
              <div class="mb-3 mt-2">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña..."
                  v-model="password"
                />
              </div>
              <button type="submit" class="btn btn-primary fw-bold w-100">
                Iniciar Sesión
              </button>
            </form>
          </template>

          <template #card-footer>
            <hr />
            <RouterLink  class="btn fw-bold"   to="/register">
            <button class="btn fw-bold btn-success">Crear Cuenta</button>
          </RouterLink>
          </template>
        </card-comp>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 895px;
  margin: auto;
}

h2 {
  max-width: 470px;
  margin: auto;
  font-size: 1.8rem;
}
.img-cont {
  display: flex;
  flex-direction: column;
}

img {
  max-width: 315px;
  margin: 1em auto 0 auto;
}

.btn-success {
  margin: auto;
  min-width: 195px;
}

.card-comp {
  max-width: 398px;
}

@media (min-width: 992px) {
  .home {
    margin: 4em auto;
  }

  img {
    margin: 0;
    margin-top: 5.6em;
  }

  h2 {
    margin: 0;
    margin-top: -0.8em;
    margin-left: 0.8em;
  }
  .card-comp {
    margin-top: 5rem;
  }
}
</style>
