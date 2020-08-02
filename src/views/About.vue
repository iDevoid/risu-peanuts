<template>
  <div class="about">
    <v-main>
      <AboutCard />
      <ContributorsCard v-bind:contributors="contributors" />
    </v-main>
  </div>
</template>

<script>
import AboutCard from '../components/cards/AboutCard';
import ContributorsCard from '../components/cards/ContributorsCard';

export default {
  name : 'About',
  components : {
    AboutCard,
    ContributorsCard,
  },
  computed: {
    contributors() {
      var vc = this.$root.$t("voice-clip");
      return [
        {
          name: "zangxx66",
          desc: "Chinese Language Translation"
        },
        {
          name: "atemoshi",
          desc: "fix typo in Japanese Short-title"
        },
        {
          name: "Green Bird",
          desc: "Ara ara" + vc
        }
      ]
    }
  }
}
</script>