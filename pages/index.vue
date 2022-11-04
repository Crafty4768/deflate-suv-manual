<template>
  <div id="app">
    <div>
      <h1>{{$t('sup-title') }}</h1>
    </div>
    <div class="top">
      <WheelLogoVue />
      <div class="top-list">
        <div class="top-list">
          <p>{{ $t('top-pre-list') }}</p>
          <ol class="inline-list">
            <li>{{ $t('top-list-1') }}</li>
            <li>{{ $t('top-list-2') }}</li>
            <li>{{ $t('top-list-3') }}</li>
          </ol>
          <p>{{ $t('top-post-list') }}</p>
        </div>
        <div class="highlight-box" v-html="$t('top-hilghlight')"></div>
      </div>
    </div>
    <div class="body">
      <div>
        <h2 class="highlight">{{ $t('kit-label') }}</h2>
        <KitStepListVue/>
      </div>
      <div>
        <h2 class="highlight">{{ $t('preview-label') }}</h2>
        <div class="highlight-box">
          <KitToPrintVue idItem="1" />
          <KitToPrintVue idItem="2" />
        </div>
      </div>
    </div>
    <div class="footer">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">{{ locale.name }}
      </nuxt-link>
    </div>
    <div class="to-print">
      <KitToPrintVue idItem="3" />
      <KitToPrintVue idItem="4" />
    </div>
  </div>
</template>


<script>
  import WheelLogoVue from '../components/WheelLogo.vue';
  import KitStepListVue from '../components/KitStepList.vue';
  import KitToPrintVue from '../components/KitToPrint.vue';
  import { reactive } from 'vue';

  export const store = reactive({
    slogan: ''
  })

  export default {
    components: {
      KitStepListVue,
      KitToPrintVue,
      WheelLogoVue,
    },
    data() {
      return {
        store: store,
      }
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    },
    mounted() {
      store.slogan = this.$t('slogan-0')
    },
    head() {
      const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
      return {
        title: this.$t('title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('sup-title')
          },
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

h1 {
  text-align: center;
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  .top-list {
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin: 0;
    margin-bottom: 4px;
  }
}
.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  > div {
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &> svg {
    margin-bottom: 2rem;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  right: 1rem;
  padding: 0.5rem;

  background: $secondary;
  a {
    color: $primary;
    font-weight: bold;
  }
}
</style>