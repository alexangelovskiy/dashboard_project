<template>
    <div class="selector relative" ref="selector">
        <div class="selected"
             @click="showOptions = !showOptions">
           <div class="w-4/5"> {{ selectedOption || 'Выбрать' }} </div>
        </div>
        <IconXMark v-if="selectedOption" class="icon cursor-pointer" @click="clearOption"/>
        <ul class="options"
            v-show="showOptions">
            <li v-for="(option, index) in options"
                :key="index"
                @click="selectOption(option)">
                {{ option }}
            </li>
        </ul>
    </div>
</template>
  
<script>
import IconXMark from '@/components/icons/IconXMark.vue';
export default {
    name: 'AppSelector',
    components: {
        IconXMark
    },
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedOption: null,
            showOptions: false
        }
    },
    methods: {
        clearOption(){
            this.selectedOption = null
            this.$emit('clear')
        },
        selectOption(option) {
            this.selectedOption = option;
            this.showOptions = false;
            this.$emit('selected', option);
        },
        closeMenu() {
            this.showOptions = false;
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
  
<style scoped>
.selector {
    position: relative;
    width: 100%;
}

.selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
}

.selected i {
    margin-left: 0.5rem;
}

.options {
    position: absolute;
    top: 105%;
    left: 0;
    z-index: 1;
    width: 100%;
    max-height: 200px;
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

.options li:hover {
    background-color: #fcfcfc;
}
.icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
}

</style>
  