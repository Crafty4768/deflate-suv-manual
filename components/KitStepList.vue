<template>
<div class="accordion">
  <KitStepVue idItem="step-1" :header="$t('kit-step-1-header')" :active="true">
    <p v-html="$t('kit-step-1-content')"></p>

    <div v-for="(item, index) in sloganList" :key="index">
      <input
        type="radio"
        :id="'item-' + index"
        name="slogan"
        :checked="index==0"
        @input="updateSlogan(item)"
      />
      <label :for="'item-' + index">{{ item }}</label>
    </div>
    <input
      type="radio"
      :id="'item-custom'"
      name="slogan"
      @input="e => toggleCustomSelection(e.target.checked)"
    />
    <input v-model="custom" type="text" class="text" max="80"/>
  </KitStepVue>
  <KitStepVue idItem="step-2" :header="$t('kit-step-2-header')">
    <p v-html="$t('kit-step-2-content')"></p>
    <button @click="onPrint">{{ $t('print-button') }}</button>
  </KitStepVue>
  <KitStepVue idItem="step-3" :header="$t('kit-step-3-header')">
    <p v-html="$t('kit-step-3-content')"></p>
  </KitStepVue>
  <KitStepVue idItem="step-4" :header="$t('kit-step-4-header')">
    <p v-html="$t('kit-step-4-content')"></p>
  </KitStepVue>
  <KitStepVue idItem="step-5" :header="$t('kit-step-5-header')">
    <p v-html="$t('kit-step-5-content')"></p>
  </KitStepVue>
</div>
</template>

<script>
  import KitStepVue from './KitStep.vue';
  import { store } from '../pages/index.vue';

  export default {
    name: 'KitStepList',
    components: {
      KitStepVue,
    },
    data() {
      return {
        custom: '',
        customSelected: false,
        store: store,
        sloganList: [
            this.$t('slogan-0'),
            this.$t('slogan-1'),
            this.$t('slogan-2'),
        ],
      }
    },
    watch: {
      custom() {
        if (this.customSelected) {
          this.store.slogan = this.custom
        }
      }
    },
    methods: {
      updateSlogan(value) {
        this.store.slogan = value
      },
      toggleCustomSelection(value) {
        this.customSelected = value
        if (this.customSelected) {
        console.log(this.custom)
          this.store.slogan = this.custom
        }
      },
      onPrint() {
        window.print();
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/css/variables";

.accordion {
    max-width: 400px;
    box-shadow: 6px 6px $secondary;
    overflow: hidden;
    background-color: $primary;
    margin: 1rem;

    input.text {
      width: 90%;
      margin-left: 2px;
      border: 0;
      border-bottom: solid 1px currentColor;
      font-size: 1rem;
      font-family: $font-text;
    }
}
</style>