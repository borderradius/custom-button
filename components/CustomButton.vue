<template>
  <button :class="['btn', 'btn--' + type, 'btn--' + size]">
    <slot />
  </button>
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
<style scoped>
.btn {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-weight: 500;
  user-select: none;
  cursor: pointer;
}

.btn--default {
  background-color: #0194ef;
}

.btn--success {
  background-color: #1bb934;
}

.btn--error {
  background-color: #e1112c;
}

.btn--small {
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
}

.btn--default {
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
}

.btn--large {
  padding: 16px 18px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
}
</style>
