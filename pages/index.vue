<template>
  <div id="app" class="m-1">
    <div>
      <h1 class="p-2 -m-1 mb-2 text-center">{{$t('sup-title') }}</h1>
    </div>
    <div class="mb-4 flex justify-center items-center flex-wrap">
      <WheelLogoVue />
      <div class="my-0 mx-2 flex flex-col items-center">
        <div class="mb-2">
          <p class="text-center mb-3">{{ $t('top-pre-list') }}</p>
          <ol class="inline-list mb-3">
            <li>{{ $t('top-list-1') }}</li>
            <li>{{ $t('top-list-2') }}</li>
            <li>{{ $t('top-list-3') }}</li>
          </ol>
          <p class="text-center">{{ $t('top-post-list') }}</p>
        </div>
        <div class="highlight-box" v-html="$t('top-hilghlight')"></div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-start">
      <div class="flex flex-col items-center mt-0 mb-2 mx-2 w-100 sm:w-1/2 lg:w-2/5">
        <h2 class="highlight mb-2">{{ $t('kit-label') }}</h2>
        <KitStepListVue/>
      </div>
      <div class="flex flex-col items-center mt-0 mb-2 mx-2 w-100 sm:w-1/2 lg:w-2/5">
        <h2 class="highlight mb-2">{{ $t('preview-label') }}</h2>
        <div class="highlight-box flex flex-wrap">
          <KitToPrintVue idItem="1" class="w-1/2"/>
          <KitToPrintVue idItem="2" class="w-1/2" />
          <KitToPrintVue idItem="3" class="w-1/2" />
          <KitToPrintVue idItem="4" class="w-1/2" />
          <KitToPrintVue idItem="5" class="w-1/2" />
          <KitToPrintVue idItem="6" class="w-1/2" />
        </div>
      </div>
    </div>
    <div class="footer fixed bottom-0 right-2 p-2">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">{{ locale.name }}
      </nuxt-link>
    </div>
  </div>
</template>


<script>
  import WheelLogoVue from '../components/WheelLogo.vue';
  import KitStepListVue from '../components/KitStepList.vue';
  import KitToPrintVue from '../components/KitToPrint.vue';

  export default {
    components: {
      KitStepListVue,
      KitToPrintVue,
      WheelLogoVue,
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    },
    head() {
      const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
      return {
        title: this.$t('title'),
        meta: [
          { charset: 'utf-8' },
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
@import "../assets/css/variables";

.footer {
  background: $secondary;
  a {
    color: $primary;
    font-weight: bold;
  }
}
</style>