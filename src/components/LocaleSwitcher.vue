<template>
  <div class="locale-changer">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
          dark
        >
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(lang, i) in langs"
          :key="i"
          link
          @click="changeLang(lang.code)"
        >
          <v-list-item-title v-text="lang.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'localehanger',
  data () {
    return { 
      langs: [
        { code: "id", name: "Bahasa Indonesia" },
        { code: "jowo", name: "Boso Jowo" },
        { code: "ja", name: "日本語" },
        { code: "en", name: "English" },
      ],
    }
  },
  methods: {
    changeLang(e) {
      this.$i18n.locale = e;
      this.$cookie.set('lang', e, 30);
      this.$router.app.$emit('lang-changed', e);
    }
  }
}
</script>