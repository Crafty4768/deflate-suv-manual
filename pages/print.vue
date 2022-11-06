<template>
  <div class="to-print flex flex-wrap">
    <KitToPrintVue idItem="1" />
    <KitToPrintVue idItem="2" />
    <KitToPrintVue idItem="3" />
    <KitToPrintVue idItem="1" />
    <KitToPrintVue idItem="2" />
    <KitToPrintVue idItem="3" />
  </div>
</template>


<script>
  import KitToPrintVue from '../components/KitToPrint.vue';
  import { reactive } from 'vue';

  export const store = reactive({
    slogan: ''
  })

  export default {
    components: {
      KitToPrintVue,
    },
    head() {
      const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
      return {
        title: this.$t('title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('sup-title'),
          },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'format-detection', content: 'telephone=no' },
          ...i18nHead.meta
        ],
        link: [
        {rel: 'icon', type: 'image/x-icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>' },
        ...i18nHead.link
        ],
      }
    }
  }
</script>

<style lang="scss">
.to-print {
    svg {
      max-width: 100%;
      max-height: 30vh;
    }
  }
</style>