<template>
    <div>
        <v-col cols="12" class="float-left" v-if="links">
            <v-card class="pa-md-2 mx-lg-auto">
                <v-card-title class="headline" v-text="title"></v-card-title>
                <v-card-actions class="d-block">
                    <div 
                        v-for="link in links" 
                        :key="link.name"
                        class="pa-md-2 mx-lg-auto d-inline"
                    >
                        <v-btn 
                            class="v-buttons subtitle-1" 
                            :color="link.color" 
                            dark 
                            :href="link.url"
                            target="_blank"
                            v-text="link.title"
                        ></v-btn>
                    </div>
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