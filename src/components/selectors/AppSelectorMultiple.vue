<template>
    <div class="selector relative"
         ref="selector">
        <div class="selected"
             @click="showOptions = !showOptions">
            <div class="w-4/5"> {{ trancate(getOne) || 'Выбрать' }} </div>
        </div>
        <IconXMark v-if="getOne"
                   class="icon cursor-pointer"
                   @click="clearOption" />
        <ul class="options"
            v-show="showOptions">
            <li :class="{ 'checked': isSelected(option) }"
                v-for="(option, index) in options"
                :key="index"
                @click="toggleOption(option)">
                {{ option }}
            </li>
        </ul>
        <AppCheckbox @checkboxStatus="isFive"
                     class="ml-4 pl-4 border-l-2 border-white py-2" />
    </div>
</template>
  
<script>
import IconXMark from '@/components/icons/IconXMark.vue';
import AppCheckbox from '@/components/inputs/AppCheckbox.vue';
export default {
    name: 'AppSelectorMultiple',
    components: {
        IconXMark, AppCheckbox
    },
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedOptions: [],
            showOptions: false
        }
    },
    methods: {
        clearOption() {
            this.selectedOptions = []
            this.$emit('clear')
        },
        isFive(value) {
            this.$emit('checkboxStatus', value)
        },
        isSelected(option) {
            return this.selectedOptions.includes(option);
        },
        toggleOption(option) {
            if (this.isSelected(option)) {
                this.selectedOptions = this.selectedOptions.filter((o) => o !== option);
            } else {
                this.selectedOptions.push(option);
            }
            this.$emit('selected', this.selectedOptions);
        },
        closeMenu() {
            this.showOptions = false;
        },
        trancate(option) {
            if (option?.length > 10) {
                return option.slice(0, 10) + '...';
            } else {
                return option;
            }
        }
    },
    computed: {
        getOne() {
            return this.selectedOptions[0]
        }
    },
    mounted() {
        document.addEventListener('click', (event) => {

            if (!this.$refs.selector?.contains(event.target)) {
                this.closeMenu();
            }
        });
    }
}
</script>
  
<style lang="scss" scoped>
.selector {
    position: relative;
    width: 100%;
    min-width: 260px;
    display: flex;
    align-items: center;
}

.selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
    min-width: 160px;
    max-height: 41px;

}

.selected i {
    margin-left: 0.5rem;
}

.options {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    max-height: 250px;
    overflow-y: auto;
    border: 2px solid #fff;
    background: #f1f2f6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.options li {
    padding: 0.5rem;
    cursor: pointer;
}

.checked {
    background: #76f0c6;

    &:hover {
        background: #54cea3 !important;
    }
}

.options li:hover {
    background-color: #fcfcfc;
}

.icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 110px;
}
</style>
  