<template>
    <b-container class="p-0">
        <b-button
            :aria-expanded="optionVisibility ? 'true' : 'false'"
            aria-controls="ancientOptions"
            @click="toggleOptionVisibility"
            variant="primary"
        >
            {{ optionVisibility ? 'Hide' : 'Show' }} Options
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
            <b-form-group
                id="field-ancient-3"
            >
                <b-form-select
                    class="col-md-6"
                    :options="playStyleOptions"
                    v-model.number="playStyle"
                >
                    <template v-slot:first>
                        <b-form-select-option value="" disabled>Select your preferred play style</b-form-select-option>
                    </template>
                </b-form-select>
                <b-form-group
                    class="col-md-6"
                    label="Frag/Siya ratio:"
                    v-if="playStyleIsHybrid"
                >
                    <b-form-input
                        number
                        :min="0.1"
                        :max="1000"
                        :step="1"
                        v-model="hybridRatio"
                    />
                </b-form-group>
            </b-form-group>
        </b-collapse>
    </b-container>
</template>

<script>
import {PLAY_STYLE, PLAY_STYLE_NAME} from '@/components/constants';

export default {
    name: 'TabAncient',
    data() {
        let _playStyleOptions = [];
        Object.entries(PLAY_STYLE_NAME).forEach(([k, v]) => {
            _playStyleOptions.push({
                text: v,
                value: parseInt(k)
            })
        });
        return {
            optionVisibility: false,
            playStyleOptions: _playStyleOptions
        }
    },
    created() {

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
        },
        playStyle: {
            get() {
                return this.$store.getters.playStyle
            },
            set(value) {
                this.$store.dispatch('setPlayStyle', value)
            }
        },
        hybridRatio: {
            get() {
                return this.$store.getters.hybridRatio
            },
            set(value) {
                this.$store.dispatch('setHybridRatio', value)
            }
        },
        playStyleIsHybrid() {
            return this.playStyle === PLAY_STYLE.HYBRID;
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