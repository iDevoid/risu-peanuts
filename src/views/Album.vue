<template>
    <div>
        <v-main>
            <masonry
                :cols="{default: 5, 1000: 2, 700: 1, 400: 1}"
                :gutter="10"
            >
                <ImageCard v-for="(image, i) in images.slice().reverse()" :key="i" v-bind:image="image" />
            </masonry>
        </v-main>
        <ImageUploader v-on:refreshImages="RefreshImages()" />
    </div>
</template>

<script>
import axios from 'axios';
import FormData from 'form-data';
import ImageUploader from '../components/buttons/ImageUploadButton';
import ImageCard from '../components/cards/ImageCard';

export default {
    name: "Album",
    components: {
        ImageUploader,
        ImageCard,
    },
    data: () => ({
        images: [],
    }),
    mounted() {
        this.RefreshImages();
    },
    methods: {
        RefreshImages() {
            var data = new FormData();
            var config = {
                method: 'get',
                url: 'https://api.imgur.com/3/album/EO4TKVw/images',
                headers: { 
                    'Authorization': 'Client-ID f2a792831ad2ed1',
                },
                data : data
            };
            axios(config)
            .then(res => this.images = res.data.data)
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>