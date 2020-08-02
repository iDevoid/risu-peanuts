<template>
    <div>
        <v-col cols="12">
            <v-card class="pa-md-2 mx-lg-auto">
                <v-card-title>
                    {{ $t('about-title') }}
                </v-card-title>
                <v-card-subtitle v-html="$t('about-subtitle')"></v-card-subtitle>
                <v-card-text v-html="$t('about-description')"></v-card-text>
            </v-card>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'AboutCard',
}
</script>