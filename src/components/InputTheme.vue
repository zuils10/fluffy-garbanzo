<template>
    <b-container class="my-1">
        <b-row align-h="center">
            <b-form-radio-group
                :options="options"
                v-model="viewMode"
            />
        </b-row>
    </b-container>
</template>

<script>
import {VIEW_MODE} from '@/components/constants';

export default {
    name: 'InputTheme',
    data() {
        return {
            options: [
                {
                    text: 'Light theme',
                    value: VIEW_MODE.LIGHT
                },
                {
                    text: 'Dark theme',
                    value: VIEW_MODE.DARK
                }
            ]
        }
    },
    computed: {
        viewMode: {
            get() {
                return this.$store.getters.viewMode;
            },
            set(value) {
                this.$store.dispatch('setViewMode', value);
            }
        }
    }
}
</script>

<style scoped>

</style>