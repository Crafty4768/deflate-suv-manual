<template>
<div class="step-list m-2">
  <KitStepVue idItem="step-1" :header="$t('kit-step-1-header')" :active="true">
    <p v-html="$t('kit-step-1-content')"></p>
    <a
      class="button"
      :href="'/pdf/kit-' + $i18n.locale + '.pdf'"
      download="kit.pdf"
    >
      {{ $t('print-button') }}
    </a>
  </KitStepVue>
  <KitStepVue idItem="step-2" :header="$t('kit-step-2-header')">
    <p v-html="$t('kit-step-2-content')"></p>
  </KitStepVue>
  <KitStepVue idItem="step-3" :header="$t('kit-step-3-header')">
    <p v-html="$t('kit-step-3-content')"></p>
  </KitStepVue>
  <KitStepVue idItem="step-4" :header="$t('kit-step-4-header')">
    <p v-html="$t('kit-step-4-content')"></p>
  </KitStepVue>
</div>
</template>

<script>
  import KitStepVue from './KitStep.vue';

  export default {
    name: 'KitStepList',
    components: {
      KitStepVue,
    },
    onPrint() {
      window.print();
    }
  }
</script>

<style lang="scss">
@import "../assets/css/variables";

.step-list {
    box-shadow: 6px 6px $secondary;
    overflow: hidden;
    background-color: $primary;
}
</style>