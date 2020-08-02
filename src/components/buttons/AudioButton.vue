<template>
    <div class="pa-md-2 mx-lg-auto d-inline">
        <v-btn class="v-buttons subtitle-1" color="button" dark @click="play(voice.path)" v-text="voice.title"></v-btn>
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