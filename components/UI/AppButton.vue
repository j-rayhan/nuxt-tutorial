<template>
  <button class="button" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.button {
  font: inherit;
  background-color: black;
  color: #fff;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;
}

.button:hover,
.button:active {
  background-color: rgb(51, 51, 51);
  border: 1px solid black;
}

.inverted {
  background-color: white;
  color: #000;
  border: 1px solid black;
}

.inverted:hover,
.inverted:active {
  color: #ccc;
  background-color: rgb(255, 255, 255);
  border: 1px solid transparent;
}

.cancel {
  background-color: red;
  color: #fff;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: salmon;
  border: 1px solid transparent;
}
</style>
