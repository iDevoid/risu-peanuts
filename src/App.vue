<template>
  <v-app>
    <HeaderNav />
    <div class="main-view">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import HeaderNav from './components/HeaderNav';

export default {
  components: {
    HeaderNav,
  },
  mounted() {
    if (this.$cookie.get('lang')) {
      this.$i18n.locale = this.$cookie.get('lang');
    } else {
      var defaultLocale = navigator.language.replace('-', '_').toLowerCase().split('_')[0];
      this.$i18n.locale = defaultLocale;
      this.$cookie.set('lang', defaultLocale, 30);
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    }
  }
}
</script>

<style scoped>
  .main-view {
    height: 100%;
    padding: 15px;
    background-color: #FCE4EC;
  }
</style>