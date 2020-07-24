import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.brown.lighten1,
                secondary: colors.brown.lighten5,
                button: colors.lightGreen.darken2,
                text: colors.grey.base,
            },
        },
    },
});
