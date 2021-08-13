<template>
  <div class="primary">
    <div class="primary__template template">
      <div class="template__header">
      </div>
      <div class="template__content">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
.primary {
  height: 100vh;
  overflow-y: auto;
  &__template {
    height: 100%;
    display: grid;
    grid-template-rows: 100px 1fr auto;
  }
}

.template {
  height: 100%;
  min-height: 100vh;
  overflow: auto;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
}
</style>
