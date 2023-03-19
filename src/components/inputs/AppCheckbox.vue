<template>
    <div class="flex">
        <div class="flex items-center">
            <div class="border-2 checkbox rounded-lg border-white mr-4 flex items-center justify-center cursor-pointer" @click.stop="switchCheckbox">
            <IconCheck v-if="checked" class="w-8"/>
        </div>

        </div>
        <div v-if="labelRight" class="input-title mr-2"><span class="mr-8">Показывать</span> скрытые анкеты</div>
    </div>
</template>

<script>
import IconCheck from '@/components/icons/IconCheck.vue';
export default {
    name: 'AppCheckbox',
    components: {
        IconCheck
    },
    props: {
        labelRight: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            checked: false
        }
    },
    methods:{
        switchCheckbox(){
            this.checked = !this.checked
            this.$emit('checkboxStatus', this.checked)
        }
    }
}
</script>

<style lang="scss" scoped>
.input-title {
    font-size: 1.2rem;
    margin-right: 1rem;
    color: white;
}
.checkbox{
    min-width: 40px;
    height: 40px;
}
</style>