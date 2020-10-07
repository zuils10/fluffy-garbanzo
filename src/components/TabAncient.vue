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
            <b-row>
                <b-form-group
                    class="col-md"
                    label="Play style:"
                    id="field-ancient-3"
                >
                    <b-form-select
                        :options="playStyleOptions"
                        v-model.number="playStyle"
                    >
                        <template v-slot:first>
                            <b-form-select-option value="" disabled>Select your preferred play style
                            </b-form-select-option>
                        </template>
                    </b-form-select>

                </b-form-group>
                <b-form-group
                    class="col-md"
                    label="Frag/Siya ratio:"
                    id="field-ancient-4"
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
            </b-row>
            <b-form-group class="col-12">
                <b-row align-h="start" align-v="center">
                    <b-form-checkbox
                        id="checkbox-level-other-ancient"
                        v-model="levelOtherAncient"
                    >
                        Vaagur, Revolc and skill ancients are
                    </b-form-checkbox>
                    <b-form-input
                        class="col"
                        number
                        v-model="levelOtherAncientOffset"
                    />
                    <span>level lower than</span>
                    <b-form-select
                        class="col"
                        :options="levelOtherAncientBaseOptions"
                        v-model.number="levelOtherAncientBase"
                    >
                        <template v-slot:first>
                            <b-form-select-option value="" disabled>Select base ancient
                            </b-form-select-option>
                        </template>
                    </b-form-select>
                </b-row>
            </b-form-group>
        </b-collapse>
    </b-container>
</template>

<script>
import {LEVEL_OTHER_ANCIENT_BASE_NAME, PLAY_STYLE, PLAY_STYLE_NAME} from '@/modules/constants';

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
            playStyleOptions: _playStyleOptions,
            levelOtherAncientBaseOptions: LEVEL_OTHER_ANCIENT_BASE_NAME
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
        },
        playStyle: {
            get() {
                return this.$store.getters.playStyle
            },
            set(value) {
                if (value !== this.$store.getters.playStyle) {
                    this.$store.dispatch('setPlayStyle', value)
                }
            }
        },
        hybridRatio: {
            get() {
                return this.$store.getters.hybridRatio
            },
            set(value) {
                if (value !== this.$store.getters.hybridRatio) {
                    this.$store.dispatch('setHybridRatio', value)
                }
            }
        },
        levelOtherAncient: {
            get() {
                return this.$store.getters.levelOtherAncient
            },
            set(value) {
                this.$store.dispatch('setLevelOtherAncient', value)
            }
        },
        levelOtherAncientOffset: {
            get() {
                return this.$store.getters.levelOtherAncientOffset
            },
            set(value) {
                this.$store.dispatch('setLevelOtherAncientOffset', value)
            }
        },
        levelOtherAncientBase: {
            get() {
                return this.$store.getters.levelOtherAncientBase
            },
            set(value) {
                this.$store.dispatch('setLevelOtherAncientBase', value)
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