<template>
    <v-col>
        <v-card class="pa-md-2" v-if="voicesCategory">
            <v-card-title class="headline audio-card-title" v-text="voicesCategory.title"></v-card-title>
            <v-card-actions class="d-block">
                <audioButton v-for="(voice, i) in voicesCategory.voices" :key="i" v-bind:voice="voice" />
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
import audioButton from '../buttons/AudioButton';

export default {
    name: 'AudioCard',
    props: [
        'voicesCategory',
        'about'
    ],
    components: {
        audioButton,
    }
}
</script>

<style scoped>
    .audio-card-title {
        word-break: normal!important;
    }
</style>