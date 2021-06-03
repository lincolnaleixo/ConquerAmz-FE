<template>
  <nav class="navbar navbar-header navbar-light">
    <div class="sidebar-toggler btn x d-block"
         @click.prevent="$store.commit('TOGGLE_SIDEBAR')">
      <b-icon icon="justify"></b-icon>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'TopNavigationBar',
};
</script>
