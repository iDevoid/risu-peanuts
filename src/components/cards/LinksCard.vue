<template>
    <div>
        <v-col cols="12" class="float-left" v-if="links">
            <v-card class="pa-md-2 mx-lg-auto">
                <v-card-title class="headline" v-text="title"></v-card-title>
                <v-card-actions class="d-block">
                    <v-btn 
                        v-for="(link, i) in links" 
                        :key="i"  
                        class="voice-button subtitle-1" 
                        :color="link.color" 
                        dark 
                        :href="link.url"
                        target="_blank"
                    >
                        {{ link.title }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'LinksCard',
    props: ['title','links']
}
</script>