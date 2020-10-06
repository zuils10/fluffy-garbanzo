<template>
    <b-container class="p-0">
        <b-button
            :aria-expanded="optionVisibility ? 'true' : 'false'"
            aria-controls="ancientOptions"
            @click="toggleOptionVisibility"
            variant="primary"
        >
            {{ optionVisibility ? 'Hide' : 'Show'}} Options
        </b-button>
        <b-collapse
            id="ancientOptions"
            v-model="optionVisibility"
        >
            <b-form-group
                id="field-ancient-1"
                label="Ascension Zone:"
                label-for="input-ascension-zone"
            >
                <b-form-input
                    id="input-ascension-zone"
                    number
                    v-model="ascensionZone"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="field-ancient-2"
            >
                <b-form-checkbox
                    id="checkbox-use-soul-next-ascension"
                    v-model="useSoulsNextAscension"
                >
                    Use souls gained in the next ascension in calculation
                </b-form-checkbox>
                <b-form-checkbox
                    id="checkbox-high-level-best-hero"
                    v-model="highLevelBestHero"
                >
                    Best Hero has at least 8000 levels
                </b-form-checkbox>
            </b-form-group>
        </b-collapse>
    </b-container>
</template>

<script>
export default {
    name: 'TabAncient',
    data() {
        return {
            optionVisibility: false
        }
    },
    computed: {
        ascensionZone: {
            get() {
                return this.$store.getters.ascensionZone
            },
            set(value) {
                this.$store.dispatch('setAscensionZone', value)
            }
        },
        useSoulsNextAscension: {
            get() {
                return this.$store.getters.useSoulsNextAscension
            },
            set(value) {
                this.$store.dispatch('setUseSoulsNextAscension', value)
            }
        },
        highLevelBestHero: {
            get() {
                return this.$store.getters.highLevelBestHero
            },
            set(value) {
                this.$store.dispatch('setHighLevelBestHero', value)
            }
        }
    },
    methods: {
        toggleOptionVisibility() {
            this.optionVisibility = !this.optionVisibility;
        }
    }
}
</script>

<style scoped>

</style>