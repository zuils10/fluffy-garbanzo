<template>
    <router-view></router-view>
</template>

<script>
import {VIEW_MODE} from '@/components/constants';

export default {
    name: 'App',
    computed: {
        viewMode: {
            get() {
                return this.$store.getters.viewMode;
            }
        }
    },
    watch: {
        viewMode: {
            handler(newValue) {
                let themeLink = document.getElementById('theme'),
                    theme = newValue,
                    themeHref = theme === VIEW_MODE.DARK ? 'https://bootswatch.com/4/darkly/bootstrap.min.css' : 'https://bootswatch.com/4/flatly/bootstrap.min.css';
                if (themeLink) {
                    themeLink.setAttribute('href', themeHref);
                } else {
                    let themeLink = document.createElement('link');
                    themeLink.id = 'theme';
                    themeLink.rel = 'stylesheet';
                    themeLink.setAttribute('href', themeHref);
                    document.head.appendChild(themeLink);
                }
            },
            immediate: true
        }
    }
}
</script>

<style scoped>

</style>
