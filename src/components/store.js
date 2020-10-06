import Vue from 'vue';
import Vuex from 'vuex';
import {VIEW_MODE} from '@/components/constants';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        viewMode: localStorage.viewMode || VIEW_MODE.LIGHT,
        saveGame: '',
        ascensionZone: null,
        useSoulsNextAscension: false,
        highLevelBestHero: false,
        playStyle: '',
        hybridRatio: 1,
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
        hybridRatio: state => state.hybridRatio
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
        }
    },
    actions: {
        setViewMode({commit}, value) {
            localStorage.viewMode = value;
            commit('SET_VIEW_MODE', value);
        },
        setSaveGame({commit}, value) {
            commit('SET_SAVE_GAME', value);
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
        }
    }
});

export default store;