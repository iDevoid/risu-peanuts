<template>
  <div>
    <v-main>
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
  created() {
    this.updateVoices(this.$cookie.get('lang') || this.$i18n.locale);
  },
  mounted() {
    this.$root.$on('langChanged', lang => this.updateVoices(lang));
  },
  methods: {
    updateVoices(lang) {
      const voicelist = () => import('../assets/voices/'+lang+'.json');
      voicelist().then((items) => {
        this.voices = items.default.category;
      });
    }
  }
}
</script>
