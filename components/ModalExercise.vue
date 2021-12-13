<template>
  <a-modal
    v-model="modalVisible"
    title="Basic Modal"
    :footer="null"
    @cancel="onCancel"
    dialogClass="test-modal"
  >
    <div class="wrapper">
      <img
        src="/media/modal-exercise.png"
        alt=""
        class="img-responsive"
        @click="onCancel"
      />
    </div>
  </a-modal>
</template>

<script>
export default {
  computed: {
    modalVisible: {
      get: function () {
        return this.visible;
      },
      set: function (value) {
        return;
      },
    },
  },
  props: {
    visible: Boolean,
  },
  methods: {
    onCancel() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.ant-modal-header {
  display: none;
}
.ant-modal-close {
  display: none !important;
}
.test-modal {
  width: 520px;
  transform-origin: 221px -173.5px;
}
.ant-modal-content {
  background-color: transparent;
  box-shadow: none;
}
.ant-modal-body {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
  .wrapper {
    img {
      cursor: pointer;
    }
  }
}
</style>