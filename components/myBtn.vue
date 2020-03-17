<template>
  <div>
    <button :class="['btn', 'btn--' + type, 'btn--' + size]">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "default"
    },
    size: {
      type: String,
      required: false,
      default: "default"
    }
  }
};
</script>
<style lang="scss" scoped>
.btn {
  border: 1px solid #ccc;
  display: inline-block;
  color: white;
  padding: 2rem;
  &--default {
    background: blue;
  }
  &--success {
    background: green;
  }
  &--warn {
    background: yellow;
  }
  &--sm {
    padding: 1rem;
  }
  &--lg {
    padding: 3rem;
  }
}
</style>
