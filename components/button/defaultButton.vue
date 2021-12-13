<template>
  <a-button class="btn-df" @click="emitClick">
    {{ title }}
  </a-button>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    emitClick(e) {
      e.preventDefault();
      this.$emit("clicked");
    },
  },
};
</script>

<style lang="scss">
.btn-df {
  background: url("/media/buttonbg.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 275px;
  height: 70px;
  font-size: 30px;
  font-family: "r0c0i bold";
  &:hover,
  &:focus {
    background: url("/media/buttonbg.png");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
}
</style>