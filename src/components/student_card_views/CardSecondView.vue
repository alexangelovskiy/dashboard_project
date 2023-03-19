<template>
    <!-- <div class="text-blue-400 font-bold text-2xl whitespace-normal border-y-2 border-blue-200 w-full py-4 px-8 h-48">
        <div class="flex justify-between">
            <div class="mb-2 w-2/3">{{ student.university }}</div>
            <div class="mb-2">{{ student.avg_score }}</div>
        </div>

        <div class="mb-2 w-2/3">{{ student.qualification }}</div>
        <div class="mb-2 w-2/3">{{ student.specialty }}</div>
    </div> -->
    <div class="text-blue-400 text-base whitespace-normal border-t-2 border-blue-200 w-full py-4 pl-8 pr-4 h-full">

        <div class="flex justify-center text-gray-400">
            <div class="flex items-center cursor-pointer rounded-lg pl-2 mr-4"
                 :class="{ 'bg-gray-100': sortByNameAsc }">
                <div class="font-bold"
                     @click="sortByName">
                    Дисциплина
                </div>
                <IconArrowUp />
            </div>

            <div class="flex items-center cursor-pointer rounded-lg pl-2"
                 :class="{ 'bg-gray-100': sortByGradeAsc }">
                <div class="font-bold"
                     @click="sortByGrade">
                    Оценки
                </div>
                <IconArrowDown />
            </div>

        </div>

        <div class="h-2/3 overflow-auto mt-6 pr-4">
            <div class="flex justify-between"
                 v-for="discipline in sortedDisciplines"
                 :key="discipline.name">
                <div class="mb-2 w-2/3">{{ discipline.name }}</div>
                <div class="mb-2 font-bold text-xl">{{ discipline.score }}</div>
            </div>
        </div>
    </div>
    <!-- <div class="flex flex-wrap gap-4 p-8">
        <AppSkill v-for="skill in student.top_key_skills"
                  :skill="skill"
                  :key="skill.name" />
    </div> -->
</template>

<script>
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
export default {
    name: 'CardSecondView',
    components: {
        IconArrowDown, IconArrowUp
    },
    props: {
        student: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            sortByNameAsc: false,
            sortByGradeAsc: false,
        };
    },
    computed: {
        sortedDisciplines() {
            let sorted = [...this.student.disciplines];

            if (this.sortByNameAsc) {
                sorted.sort((a, b) => a.name.localeCompare(b.name));
            }

            if (this.sortByGradeAsc) {
                sorted.sort((a, b) => b.score - a.score);
            }

            return sorted;
        },
    },
    methods: {
        sortByName() {
            this.sortByNameAsc = !this.sortByNameAsc;
        },
        sortByGrade() {
            this.sortByGradeAsc = !this.sortByGradeAsc;
        },
    },
};

</script>

<style lang="scss" scoped></style>