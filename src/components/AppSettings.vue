<template>
    <div class="relative"
         ref="settings">
        <IconSettings class="cursor-pointer"
                      @click="showOptions = !showOptions" />
        <div class="settings"
             v-if="showOptions">
            Цветовое решение диаграмм
            <div class="colors__container">
                <div class="mr-4 flex p-1 border-2"
                @click="setColorScheme('color')"
                     :class="{ 'border-2 border-gray-500 rounded': currentColorScheme === 'color' }">
                    <div v-for="color in color_scheme?.color"
                         :style="{ background: color }"
                         class="color w-5 h-5"></div>
                </div>
                <div class="flex p-1 border-2"
                @click="setColorScheme('black')"
                     :class="{ 'border-2 border-gray-500 rounded': currentColorScheme === 'black' }">
                    <div v-for="color in color_scheme?.black"
                         :style="{ background: color }"
                         class="color w-5 h-5"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import IconSettings from '@/components/icons/IconSettings.vue'
export default {
    name: 'AppSettings',
    components: {
        IconSettings
    },
    data() {
        return {
            showOptions: false
        }
    },
    computed: {
    ...mapGetters(['currentColorScheme', 'color_scheme'])
  },
    methods: {
        ...mapMutations(['setColorScheme']),
        closeMenu() {
            this.showOptions = false;
        }
    },
    mounted() {
        document.addEventListener('click', (event) => {

            if (!this.$refs.settings?.contains(event.target)) {
                this.closeMenu();
            }
        });
    }

}
</script>

<style lang="scss" scoped>
.settings {
    position: absolute;
    bottom: 0;
    left: 60px;
    z-index: 20;
    width: 260px;
    height: 100px;
    padding: 10px;
    border-radius: 4px;
    border: 2px solid #fff;
    background: #f1f2f6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-weight: 700;
}

.colors__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
}

.color {
    margin-right: 1px;
    border: 1px solid gray;
}</style>