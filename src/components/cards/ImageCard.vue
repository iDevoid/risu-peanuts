<template>
    <v-col
        class="pa-md-2"
    >
        <v-card
            max-width="400"
        >
        
            <v-img
                :src="image.link"
                max-height="400"
                class="white--primary align-end"
            />
            <v-card-title v-text="image.title"/>
            <v-card-subtitle class="pb-0" v-text="uploader"/>
            <v-card-text class="text--primary" v-text="shortDesc"/>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "ImageCard",
    props: ["image"],
    computed: {
        uploader() {
            if (!this.image.description) return;
            return this.$t("upload-by") + ": " + this.image.description.split('~ Uploaded By ')[1];
        },
        shortDesc() {
            if (!this.image.description) return;
            return this.image.description.split('~ Uploaded By ')[0];
        }
    }
}
</script>