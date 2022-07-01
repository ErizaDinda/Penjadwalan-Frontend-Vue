<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{name: 'login'}" class="navbar-brand">APLIKASI PENJADWALAN</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
  body {
    background: lightgray !important;
  }
</style>