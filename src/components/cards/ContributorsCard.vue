<template>
    <div>
        <v-col cols="12">
            <v-card class="pa-md-2 mx-lg-auto">
                <v-card-title>
                    {{ $t("contributors") }}
                </v-card-title>
                <v-list-item v-for="(contributor, index) in contributors" :key="index" two-line>
                    <v-list-item-content>
                        <v-list-item-title>{{ contributor.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ $t("contributions") }}: {{ contributor.desc }}</v-list-item-subtitle>
                        <v-divider v-if="index + 1 < contributors.length" :key="index"></v-divider>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'ContributorsCard',
    props: ['contributors']
}
</script>