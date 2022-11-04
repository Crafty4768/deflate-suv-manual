<template>
<div class="accordion-item">
  <input type="radio" :id="idItem" :checked="active" name="menu">
  <label :for="idItem">{{ header }}</label>
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
  export default {
    name: 'KitStep',
    props: {
      idItem: {
        type: String,
        required: true
      },
      header: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style lang="scss">
@import "../assets/css/variables";

.accordion-item {
  border: solid 2px $primary;
  > label, > .content{
      padding: 14px 20px;
  }
  > label {
      display: block;
      color: $secondary;
      font-family: $font-title;
      font-weight: bold;
      cursor: pointer;
      position: relative;
      transition: background-color 0.1s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
  }
  > .content{
      background: white;
      line-height: 1.6;
      font-size: 1em;
      display: none;
  }
  > input{
      display: none;
      &:checked ~ .content {
        display: block;
      }
  }
}
</style>