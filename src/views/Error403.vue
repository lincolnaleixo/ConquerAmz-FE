<template>
  <div id="error">
    <div class="container text-center pt-32">
      <h1 class='error-title'>403</h1>
      <p>You're not allowed in here</p>
      <router-link :to="{name: 'Home'}" class='btn btn-primary'>Go Home</router-link>
    </div>
  </div>
</template>
