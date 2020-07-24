<template>
  <div class="about">
    <v-main>
      <AboutCard />
    </v-main>
  </div>
</template>

<script>
import AboutCard from '../components/cards/AboutCard';

export default {
  name : 'About',
  components : {
    AboutCard,
  }
}
</script>