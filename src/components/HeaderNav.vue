<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
            src="/risu.jpeg"
        >
            <v-list dense>
                <template v-for="(menu, i) in generateMenus">
                    <v-list-item
                    :key="i"
                    :to="menu.link"
                    :href="menu.url"
                    :target="menu.target"
                    >
                        <v-list-item-action>
                            <v-icon :color="menu.color">{{ menu.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title color="text">
                                {{ menu.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>


        <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="primary"
        dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <div class="d-flex align-center">
                <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="logo.png"
                transition="scale-transition"
                width="50"
                />
                <span class="long-title ml-3 mr-5 text-h5 font-weight-medium">{{ $t('long-title') }}</span>
                <span class="short-title ml-3 mr-5 text-h5 font-weight-medium">{{ $t('short-title') }}</span>
            </div>

            <v-spacer></v-spacer>

            <localeSwitcher />
        </v-app-bar>
    </div>
</template>

<script>
import localeSwitcher from './LocaleSwitcher';

export default {
    components: {
        localeSwitcher,
    },
    name:'Header',
    data () {
        return {
            drawer: null,
        }
    },
    computed: {
        generateMenus() {
            return [
                // link param is for :to value which being use for vue-router, it won't refresh the page.
                // url param is for :href for giving the button the condition to open url without the current host, and target is this one
                // if you use link (:to) for external url, it will be like http://localhost:8080/https://twitter.com/moonahoshinova
                // don't worry the vue itself will use the defined one without giving an error
                { icon: 'mdi-surround-sound', text: this.$root.$t('voice-button'), link: '/', color: 'purple darken-1' },
                { icon: 'mdi-image-album', text: this.$root.$t('album'), link: '/album', color: 'orange lighten-1' },
                { 
                    icon: 'mdi-youtube', 
                    text: this.$root.$t('youtube'), 
                    url: 'https://www.youtube.com/channel/UCOyYb1c43VlX9rc_lT6NKQw',
                    target: '_blank',
                    color: 'red darken-1'
                },
                { 
                    icon: 'mdi-twitter', 
                    text: this.$root.$t('twitter'), 
                    url: 'https://twitter.com/ayunda_risu',
                    target: '_blank',
                    color: 'blue lighten-1'
                },
                { 
                    icon: 'mdi-open-in-new', 
                    text: this.$root.$t('support'), 
                    url: 'https://streamlabs.com/risuayundachhololive-id/tip',
                    target: '_blank',
                    color: 'orange darken-2'
                },
                { icon: 'mdi-link', text: this.$root.$t('links'), link: '/links', color: 'light-green lighten-1' },
                { icon: 'mdi-information', text: this.$root.$t('about'), link: '/about', color: 'blue-grey darken-1' },
            ]
        }
    }
}
</script>

<style scoped>
    @media only screen and (max-width: 992px) {
        .long-title {
            display: none!important;
        }
        .short-title {
            display: visible;
        }
    }
    @media only screen and (min-width: 993px) {
        .long-title {
            display: visible;
        }
        .short-title {
            display: none;
        }
    }
    a {
        text-decoration: none;
    }
</style>