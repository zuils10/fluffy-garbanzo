<template>
    <b-container
        class="px-1"
        fluid="true"
    >
        <b-col cols="12" md="7">
            <h1 class="text-center">ANCIENT CALCULATOR</h1>
            <h5 class="text-center">
                <span>
                    Clicker Heroes v1.0e10 (for v1.0e9, see <router-link :to="{name: 'old'}">here</router-link>)
                </span>
            </h5>
            <input-theme/>
            <input-save-game/>
            <b-card
                bg-variant="transparent"
                class="border-0"
                no-body
                body-class="p-0"
            >
                <b-tabs
                    active-nav-item-class="bg-success"
                    card
                    fill
                    nav-class="m-0"
                    nav-wrapper-class="bg-transparent border-0 p-0"
                    pills
                >
                    <b-tab
                        no-body
                        :title="k.title"
                        title-link-class="py-1"
                        v-for="k in tabs" :key="k.title"
                    >
                        <component :is="k.info"></component>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-col>
    </b-container>
</template>

<script>
import InputSaveGame from '@/components/InputSaveGame';
import InputTheme from '@/components/InputTheme';
import TabAncient from '@/components/TabAncient';
import TabOutsider from '@/components/TabOutsider';
import TabClan from '@/components/TabClan';
import TabAbout from '@/components/TabAbout';

export default {
    name: 'CalculatorLatest',
    components: {InputTheme, InputSaveGame},
    data() {
        return {
            tabs: [
                {title: 'ANCIENT', info: TabAncient},
                {title: 'OUTSIDER', info: TabOutsider},
                {title: 'CLAN', info: TabClan},
                {title: 'ABOUT', info: TabAbout},
            ]
        }
    }
}
</script>

<style scoped>

</style>