<template>
  <div id="error">
    <div class="container text-center pt-32">
      <h1 class='error-title'>404</h1>
      <p>we couldn't find the page you are looking for</p>
      <router-link :to="{name: 'Home'}" class="btn btn-primary">Go Home</router-link>
    </div>
    <div class="footer pt-32">
      <p class="text-center">Copyright &copy; ConquerAmazon 2021</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Error404',
};
</script>
