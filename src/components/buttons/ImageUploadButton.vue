<template>
    <div>
        <v-btn
            bottom
            color="button"
            dark
            fixed
            right
            large
            @click="upload = !upload"
        >
            <v-icon left>mdi-upload</v-icon>
            {{ $t("new-image") }}
        </v-btn>
        <v-dialog
            v-model="upload"
            max-width="800px"
        >
            <form
                @submit.prevent="UploadImage()"
            >
                <v-card>
                    <v-card-title>{{ $t("upload-album") }}</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <ImageCard v-bind:image="preview" v-if="preview.link" />
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <input type="file" ref="file" accept="image/*" @change="ImageSelected($event)" required/>
                                <v-text-field :label="$t('upload-title')+' *'" @input="preview.title = $event" maxlength="64" required></v-text-field>
                                <v-text-field :label="$t('upload-nickname')+' *'" v-model="nickname" @input="descChange()" maxlength="32" required></v-text-field>
                                <v-text-field :label="$t('upload-desc')+' *'" v-model="desc" @input="descChange()" maxlength="128" required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-card-subtitle class="pb-0">
                            <a href="https://imgur.com/a/EO4TKVw" target="_blank">{{ $t("upload-support") }}</a>
                        </v-card-subtitle>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="upload = false">{{ $t("upload-close") }}</v-btn>
                        <v-btn color="blue darken-1" text type="submit">{{ $t("upload-submit") }}</v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-dialog>
        <v-dialog
            v-model="loading"
            hide-overlay
            persistent
            max-width="300px"
        >
            <v-card
                color="primary"
                dark
            >
                <v-card-text>
                    {{ $t("upload-wait") }}
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    />
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios';
import FormData from 'form-data';
import ImageCard from '../cards/ImageCard';

export default {
    name: "ImageUploadButton",
    data: () => ({
        loading: false,
        upload: false,
        image: null,
        preview: {
            link: null,
            title: "",
            description: "",
        },
        nickname: "",
        desc: "",
    }),
    components: {
        ImageCard,
    },
    methods: {
        descChange() {
            this.preview.description = this.desc + " ~ Uploaded By " + this.nickname;
        },
        ImageSelected(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.image = files[0];
            const reader = new FileReader();
            reader.readAsDataURL(this.image);
            reader.onload = e => {
                this.preview.link = e.target.result;
            };
        },
        UploadImage() {
            var data = new FormData();
            data.append('image', this.image);
            data.append('album', 'GrLehDFgXKccsNy');
            data.append('title', this.preview.title);
            data.append('description', this.preview.description);

            var config = {
                method: 'POST',
                url: 'https://api.imgur.com/3/image',
                headers: { 
                    'Authorization': 'Client-ID f2a792831ad2ed1',
                },
                data : data
            };
            this.upload = false;
            this.loading = true;
            axios(config)
            .then(() => {
                this.loading = false;
                this.$emit('refreshImages');
            })
            .catch(function (error) {
                this.loading = false;
                console.log(error);
            });
        }
    }
}
</script>