<template>
  <div class="container" id="error-page">
    <h1>Error {{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Back to homepage</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "default",
};
</script>

<style lang="scss">
#error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  h1 {
    font-size: 50px;
    text-align: center;
  }
  p {
    font-size: 38px;
    text-align: center;
  }
  a {
    font-size: 28px;
  }
}
</style>