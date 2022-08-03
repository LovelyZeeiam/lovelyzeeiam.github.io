<template>
  <img class="icon float-left" src="@/assets/icon.jpeg" />
</template>

<script>
export default {
    name: "IconHead"
}
</script>

<style lang="less" scoped>
.icon {
    aspect-ratio: 1;

    border: 1px solid rgba(0, 0, 0, 0.7);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
    border-radius: 40%;

    position: relative;
}
</style>