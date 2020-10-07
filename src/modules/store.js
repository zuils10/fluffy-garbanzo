import Vue from 'vue';
import Vuex from 'vuex';
import {ANCIENT, VIEW_MODE} from '@/modules/constants';
import optimize from '@/modules/optimize';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        viewMode: localStorage.viewMode || VIEW_MODE.LIGHT,
        saveGame: '',
        ascensionZone: null,
        useSoulsNextAscension: false,
        highLevelBestHero: false,
        playStyle: '',
        hybridRatio: null,
        levelOtherAncient: false,
        levelOtherAncientOffset: 5,
        levelOtherAncientBase: ANCIENT.CHRONOS
    },
    getters: {
        viewMode: state => state.viewMode,
        viewModeCss: state => {
            if (state.viewMode === VIEW_MODE.DARK) {
                return '';
            }
            return '';
        },
        saveGame: state => state.saveGame,
        ascensionZone: state => state.ascensionZone,
        useSoulsNextAscension: state => state.useSoulsNextAscension,
        highLevelBestHero: state => state.highLevelBestHero,
        playStyle: state => state.playStyle,
        hybridRatio: state => state.hybridRatio,
        levelOtherAncient: state => state.levelOtherAncient,
        levelOtherAncientOffset: state => state.levelOtherAncientOffset,
        levelOtherAncientBase: state => state.levelOtherAncientBase
    },
    mutations: {
        SET_VIEW_MODE(state, value) {
            state.viewMode = value;
        },
        SET_SAVE_GAME(state, value) {
            state.saveGame = value;
        },
        SET_ASCENSION_ZONE(state, value) {
            state.ascensionZone = value;
        },
        SET_USE_SOULS_NEXT_ASCENSION(state, value) {
            state.useSoulsNextAscension = value;
        },
        SET_HIGH_LEVEL_BEST_HERO(state, value) {
            state.highLevelBestHero = value;
        },
        SET_PLAY_STYLE(state, value) {
            state.playStyle = value;
        },
        SET_HYBRID_RATIO(state, value) {
            state.hybridRatio = value;
        },
        SET_LEVEL_OTHER_ANCIENT(state, value) {
            state.levelOtherAncient = value;
        },
        SET_LEVEL_OTHER_ANCIENT_OFFSET(state, value) {
            state.levelOtherAncientOffset = value;
        },
        SET_LEVEL_OTHER_ANCIENT_BASE(state, value) {
            state.levelOtherAncientBase = value;
        },
    },
    actions: {
        setViewMode({commit}, value) {
            localStorage.viewMode = value;
            commit('SET_VIEW_MODE', value);
        },
        setSaveGame({commit, state}, value) {
            commit('SET_SAVE_GAME', value);
            let {
                ascensionZone: newAscensionZone,
                playStyle: newPlayStyle,
                hybridRatio: newHybridRatio
            } = optimize.getGameAttributes(value, {
                ascensionZone: state.ascensionZone,
                playStyle: state.playStyle,
                hybridRatio: state.hybridRatio
            });
            if (newAscensionZone !== state.ascensionZone) {
                commit('SET_ASCENSION_ZONE', newAscensionZone);
            }
            if (newPlayStyle !== state.playStyle) {
                commit('SET_PLAY_STYLE', newPlayStyle);
            }
            if (newHybridRatio !== state.hybridRatio) {
                commit('SET_HYBRID_RATIO', newHybridRatio);
            }
            optimize.spending(value, {
                ascensionZone: state.ascensionZone,
                useSoulsNextAscension: state.useSoulsNextAscension,
                playStyle: state.playStyle,
                hybridRatio: state.hybridRatio,
                levelOtherAncient: state.levelOtherAncient
            });
        },
        setAscensionZone({commit}, value) {
            commit('SET_ASCENSION_ZONE', value);
        },
        setUseSoulsNextAscension({commit}, value) {
            commit('SET_USE_SOULS_NEXT_ASCENSION', value);
        },
        setHighLevelBestHero({commit}, value) {
            commit('SET_HIGH_LEVEL_BEST_HERO', value);
        },
        setPlayStyle({commit}, value) {
            commit('SET_PLAY_STYLE', value);
        },
        setHybridRatio({commit}, value) {
            commit('SET_HYBRID_RATIO', value);
        },
        setLevelOtherAncient({commit}, value) {
            commit('SET_LEVEL_OTHER_ANCIENT', value);
        },
        setLevelOtherAncientOffset({commit}, value) {
            commit('SET_LEVEL_OTHER_ANCIENT_OFFSET', value);
        },
        setLevelOtherAncientBase({commit}, value) {
            commit('SET_LEVEL_OTHER_ANCIENT_BASE', value);
        }
    }
});

export default store;