<template>
    <div class="text-blue-400 font-bold text-2xl whitespace-normal border-y-2 border-blue-200 w-full py-4 px-8 h-48">
        <div class="flex justify-between relative">
            <div class="mb-2 w-2/3">{{ student.university }}</div>
            <AppDiagramm :size="100" class="diagram" :percent="100/5 * student.avg_score" :label="student.avg_score"/>
        </div>

        <div class="mb-2 w-3/4">{{ student.qualification }}</div>
        <div class="mb-2 w-3/4">{{ student.specialty }}</div>
    </div>
    <div class="text-blue-400 text-base whitespace-normal border-b-2 border-blue-200 w-full py-4 px-8 h-44">
        <div class="flex justify-between"
             v-for="discipline in student.top_disciplines"
             :key="discipline.name">
            <div class="mb-2 w-3/4">{{ discipline.name }}</div>
            <div class="mb-2 font-bold text-xl">{{ discipline.score }}</div>
        </div>
    </div>
    <div class="flex flex-wrap gap-4 p-8">
        <AppSkill v-for="skill in student.top_key_skills"
                  :skill="skill"
                  :key="skill.name" />
        <div class="w-full"></div>
    </div>
</template>

<script>
import AppSkill from '@/components/AppSkill.vue'
import AppDiagramm from '@/components/AppDiagramm.vue'
export default {
    name: 'CardFirstView',
    components: {
        AppSkill, AppDiagramm
    },
    props: {
        student: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.diagram{
    position: absolute;
    right: -60px;
    top: -50px;
}
</style>