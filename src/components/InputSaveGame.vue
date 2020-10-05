<template>
    <b-card
        border-variant="danger"
        header="SAVE GAME"
        header-bg-variant="danger"
        header-text-variant="white"
    >
        <b-container>
            <b-row
                class="align-items-center"
            >
                <b-form-input
                    class="col mr-1"
                    v-model="saveGame"
                    placeholder="Paste save game here"
                ></b-form-input>
                <span>or</span>
                <b-button
                    class="col ml-1"
                    variant="warning"
                >
                    Load a save game
                </b-button>
            </b-row>
        </b-container>
    </b-card>
</template>

<script>
export default {
    name: 'InputSaveGame',
    computed: {
        saveGame: {
            get() {
                return this.$store.getters.saveGame;
            },
            set(value) {
                this.$store.dispatch('setSaveGame', value);
            }
        },
    }
}
</script>