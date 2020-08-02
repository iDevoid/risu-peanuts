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
                    { name: "fubuki", title: "Fubuki Button", url: "https://fubuki.moe", color: "blue lighten-1" },
                    { name: "mio", title: "Mio Button", url: "https://ookamimio.org", color: "grey darken-1" },
                    { name: "korone", title: "Korone Button", url: "https://korone.icu", color: "brown darken-2" },
                    { name: "okayu", title: "Okayu Button", url: "https://okayu.icu", color: "purple lighten-1" },
                    { name: "matsuri", title: "Matsuri Button", url: "https://natsuiromatsuri.moe", color: "yellow darken-3" },
                    { name: "pekora", title: "Pekora Button", url: "https://peko.top", color: "orange darken-2" },
                    { name: "aqua", title: "Aqua Button", url: "https://aquaminato.moe", color: "pink darken-1" },
                    { name: "ayame", title: "Ayame Button", url: "https://nakiriayame.moe", color: "red darken-4" },
                    { name: "suisei", title: "Suisei Button", url: "https://suisei.moe", color: "indigo darken-1" },
                    { name: "towa", title: "Towa Button", url: "https://towa.live", color: "purple lighten-1" },
                    { name: "marine", title: "marine Button", url: "http://www.ahoybutton.art", color: "red darken-2" },
                    { name: "echo", title: "Echo Button", url: "https://sepeach.com", color: "pink lighten-1" },
                    { name: "artia", title: "Artia Button", url: "https://artia.moe", color: "blue lighten-1" },
                    { name: "sasa", title: "Sasa Button (Sasaki Saku)", url: "https://sasa-kids.com", color: "pink darken-1" },
                    { name: "bell", title: "Bell Button (Bell Nekonogi)", url: "https://bell.colter.top", color: "pink lighten-1" },
                ]
            }
        ]
    }
  }
}
</script>