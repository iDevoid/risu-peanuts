<template>
    <div class="pa-md-2 mx-lg-auto d-inline">
        <v-btn class="voice-button subtitle-1" color="button" dark @click="play(voice.path)" v-text="voice.title"></v-btn>
    </div>
</template>

<script>
let audio = new Audio();

export default {
    name : 'AudioButton',
    props : ['voice'],
    methods : {
        play(path) {
            audio.src = 'voices/' + path;
            audio.play();
        }
    }
}
</script>

<style scoped>
    .voice-button {
        text-transform: unset;
        margin: 5px 0;
        white-space: normal;
        min-height: 36px;
        height: auto!important;
    }
    @media only screen and (max-width: 992px) {
        .voice-button {
            text-transform: unset;
            padding: 5px;
            width: 100%;
        }
    }
</style>