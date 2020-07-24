<template>
  <div>
    <v-main v-bind="updateVoices(locale)">
      <masonry
      :cols="{default: 2, 1000: 2, 700: 1, 400: 1}"
      :gutter="10"
      >
        <AudioCard v-for="(voice, i) in voices" :key="i" v-bind:voicesCategory="voice" />
      </masonry>
    </v-main>
  </div>
</template>

<script>
import AudioCard from '../components/cards/AudioCard';

export default {
  name: 'Home',
  data() {
    return {
      voices: [],
    }
  },
  components: {
    AudioCard,
  },
  computed: {
    locale() {
      return this.$i18n.locale
    }
  },
  methods: {
    updateVoices: function(lang) {
      let voicelist = () => import('../assets/voices/'+lang+'.json');
      voicelist().then((items) => {
        this.voices = items.default.category;
      });
    }
  }
}
</script>
