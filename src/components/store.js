import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        viewMode: 'light',
        rawSaveGame: '',
        ascensionZone: null,
        useSoulsNextAscension: false,
        highLevelBestHero: false,
    },
    getters: {
        viewMode: state => state.viewMode,
        rawSaveGame: state => state.rawSaveGame,
        ascensionZone: state => state.ascensionZone,
        useSoulsNextAscension: state => state.useSoulsNextAscension,
        highLevelBestHero: state => state.highLevelBestHero
    },
    mutations: {
        SET_VIEW_MODE(state, value) {
            state.viewMode = value;
        },
        SET_RAW_SAVE_GAME(state, value) {
            state.rawSaveGame = value;
        },
        SET_ASCENSION_ZONE(state, value) {
            state.ascensionZone = value;
        },
        SET_USE_SOULS_NEXT_ASCENSION(state, value) {
            state.useSoulsNextAscension = value;
        },
        SET_HIGH_LEVEL_BEST_HERO(state, value) {
            state.highLevelBestHero = value;
        }
    },
    actions: {
        setViewMode({commit}, value) {
            commit('SET_VIEW_MODE', value);
        },
        setRawSaveGame({commit}, value) {
            commit('SET_RAW_SAVE_GAME', value);
        },
        setAscensionZone({commit}, value) {
            commit('SET_ASCENSION_ZONE', value);
        },
        setUseSoulsNextAscension({commit}, value) {
            commit('SET_USE_SOULS_NEXT_ASCENSION', value);
        },
        setHighLevelBestHero({commit}, value) {
            commit('SET_HIGH_LEVEL_BEST_HERO', value);
        }
    }
});

export default store;