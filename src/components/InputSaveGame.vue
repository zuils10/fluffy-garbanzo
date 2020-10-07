<template>
    <b-card
        class="border-0"
        body-class="px-0 py-1"
        header="SAVE GAME"
        header-bg-variant="danger"
        header-class="p-1"
        header-text-variant="white"
    >
        <b-container>
            <b-row
                class="align-items-center"
            >
                <b-form-input
                    class="col mr-1"
                    v-model="loadedData"
                    placeholder="Paste save game here"
                ></b-form-input>
                <span>or</span>
                <b-button
                    class="col ml-1"
                    @click="selectFile"
                    variant="warning"
                >
                    Load a save game
                </b-button>
            </b-row>
        </b-container>
    </b-card>
</template>

<script>
import codec from './codec';

export default {
    name: 'InputSaveGame',
    data() {
        return {
            loadedData: '',
        }
    },
    watch: {
        loadedData(newValue) {
            try {
                const decodedData = codec.decoder(newValue);
                this.$store.dispatch('setSaveGame', decodedData);
            } catch (e) {
                alert(e.message);
            }
        }
    },
    methods: {
        selectFile() {
            let inputFile = document.createElement('input');
            inputFile.type = 'file';
            inputFile.addEventListener('change', e => {
                let fr = new FileReader();
                fr.onload = () => {
                    this.loadedData = fr.result;
                };
                fr.readAsText(e.target.files[0]);
            });
            inputFile.click();
        }
    }
}
</script>