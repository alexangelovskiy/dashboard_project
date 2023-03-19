<template>
    <!-- <div class="text-blue-400 font-bold text-2xl whitespace-normal border-y-2 border-blue-200 w-full py-4 px-8 h-48">
        <div class="flex justify-between">
            <div class="mb-2 w-2/3">{{ student.university }}</div>
            <div class="mb-2">{{ student.avg_score }}</div>
        </div>

        <div class="mb-2 w-2/3">{{ student.qualification }}</div>
        <div class="mb-2 w-2/3">{{ student.specialty }}</div>
    </div> -->
    <!-- <div class="text-blue-400 text-base whitespace-normal border-t-2 border-blue-200 w-full py-4 px-8 h-44">
        <div class="flex justify-between"
             v-for="discipline in student.disciplines"
             :key="discipline.name">
            <div class="mb-2 w-2/3">{{ discipline.name }}</div>
            <div class="mb-2 font-bold text-xl">{{ discipline.score }}</div>
        </div>
    </div> -->
    <div class="flex flex-wrap gap-4 p-8 border-t-2 border-blue-200">
        <div class="flex justify-around w-full text-blue-400 text-xl whitespace-normal">
            <div class="flex">
                <div class="mr-2 cursor-pointer"
                     :class="{ 'underline': skill }"
                     @click="skill = !skill">Hard Skills</div>
                <div v-if="skill" class="mr-4 cursor-pointer text-gray-400"
                :class="{ 'bg-gray-100 rounded-lg': sortByGradeHard }"
                @click="setSortByGradeHard">
                    <IconArrowDown />
                </div>
            </div>
            <div class="flex">
                <div class="mr-2 cursor-pointer"
                     :class="{ 'underline': !skill }"
                     @click="skill = !skill">Soft Skills</div>
                <div v-if="!skill" class="mr-4 cursor-pointer text-gray-400"
                :class="{ 'bg-gray-100 rounded-lg': sortByGradeSoft }"
                @click="setSortByGradeSoft">
                    <IconArrowDown />
                </div>
            </div>

        </div>
        <template v-if="skill">
            <AppSkill v-for="skill in sortedSkillesHard"
                      :skill="skill"
                      :key="skill.name" />
        </template>
        <template v-else>
            <AppSkill v-for="skill in sortedSkillesSoft"
                      :skill="skill"
                      :key="skill.name" />
        </template>
    </div>
</template>

<script>
import IconArrowDown from '@/components/icons/IconArrowDown.vue';
import AppSkill from '@/components/AppSkill.vue'
export default {
    name: 'CardThirdView',
    components: {
        AppSkill, IconArrowDown
    },
    props: {
        student: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            skill: true,
            sortByGradeSoft: false,
            sortByGradeHard: false,
        }
    },
    computed:{
        sortedSkillesHard() {
            let sorted = [...this.student.key_skills_hard];

            if (this.sortByGradeHard) {
                sorted.sort((a, b) => b.score - a.score);
            }

            return sorted;
        },
        sortedSkillesSoft() {
            let sorted = [...this.student.key_skills_soft];

            if (this.sortByGradeSoft) {
                sorted.sort((a, b) => b.score - a.score);
            }

            return sorted;
        },
    },
    methods: {
        setSortByGradeSoft() {
            this.sortByGradeSoft = !this.sortByGradeSoft;
        },
        setSortByGradeHard() {
            this.sortByGradeHard = !this.sortByGradeHard;
        },
    },
}
</script>

<style lang="scss" scoped></style>