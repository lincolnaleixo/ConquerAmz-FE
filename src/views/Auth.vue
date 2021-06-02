<template>
  <section class="auth-wrapper pt-4">
    <Login v-if="loginMode"></Login>
    <Register v-else></Register>
  </section>
</template>
<script>
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';

export default {
  name: 'AuthenticationView',
  components: {
    Login,
    Register,
  },
  computed: {
    loginMode() {
      return this.$route.path.toLowerCase().includes('login');
    },
  },
};
</script>
