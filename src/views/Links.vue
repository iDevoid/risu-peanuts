<template>
    <v-main>
        <LinksCard 
            v-for="link in links" 
            :key="link.name" 
            v-bind:links="link.list" 
            v-bind:title="link.title"
        />
    </v-main>
</template>

<script>
import LinksCard from '../components/cards/LinksCard';

export default {
  name : 'Links',
  components : {
    LinksCard,
  },
  computed: {
    links() {
        return [
            // this is the hololive member links
            {
                "name": "hololivelinks",
                "title": this.$root.$t('links'),
                "list": [
                    { name: "iofi", title: this.$root.$t('iofi'), url: "https://iofi.moe", color: "pink" },
                    { name: "moona", title: this.$root.$t('moona'), url: "https://moona.moe", color: "purple darken-1" },
                ]
            }
        ]
    }
  }
}
</script>