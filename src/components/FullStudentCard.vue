<template>
  <div class="card rounded-tl-large rounded-br-large border-2 border-blue-300">
    <div class="w-full p-4">
      <div class="flex justify-end">
        <div class="flex items-center justify-center cursor-pointer"
             @click="$store.commit('setStudentClear')">
          <IconArrowsPointingIn />
        </div>
        <!-- <div class="flex items-center justify-center cursor-pointer" @click="lockStudentCard">
          <IconPin />
        </div>
        <div class="flex items-center justify-center">
          <IconEyeSlash />
        </div> -->
      </div>
    </div>
    <div class="w-full">
      <div class="flex justify-center flex-col -mt-3">
        <div class="font-bold text-3xl whitespace-normal text-center mb-8 flex ml-14">
          <div class="flex justify-center text-3xl font-bold mr-4">{{ student.int_score }}</div>
          <div class="text-blue-400">{{ student.name }}</div>
        </div>
      </div>
      <div class="text-blue-400 font-bold text-2xl whitespace-normal border-y-2 border-blue-200 w-full py-4 px-8 h-48">
        <div class="flex">
          <div class="-mt-12 w-1/5 flex items-center justify-center">

            <AppDiagramm :percent="100/5 * student.avg_score" :label="student.avg_score"/>

            </div>
          <div>
            <div class="mb-2">{{ student.university }}</div>
            <div class="mb-2">{{ student.qualification }}</div>
            <div class="mb-2">{{ student.specialty }}</div>
          </div>
        </div>

      </div>
      <div class="text-blue-400 text-base whitespace-normal border-b-2 border-blue-200 w-full py-4 px-8 h-2/5">
        <div class="flex justify-end text-gray-400">
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
        <div class="h-2/3 overflow-auto mt-6 pr-4 flex flex-wrap">
          <div class="flex w-1/3 justify-between pr-10"
               v-for="discipline in sortedDisciplines"
               :key="discipline.name">
            <div class="mb-2">{{ discipline.name }}</div>
            <div class="mb-2 font-bold text-xl text-black">{{ discipline.score }}</div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-4 p-8">
        <div class="flex justify-end w-full text-blue-400 text-xl whitespace-normal">
          <div class="flex">
            <div class="mr-2 cursor-pointer"
                 :class="{ 'underline': skill,
                ' mr-6': !skill }"
                 @click="skill = !skill">Hard Skills</div>
            <div v-if="skill"
                 class="mr-4 cursor-pointer text-gray-400"
                 :class="{
                   'bg-gray-100 rounded-lg': sortByGradeHard,
                   
                 }"
                 @click="setSortByGradeHard">
              <IconArrowDown />
            </div>
          </div>
          <div class="flex">
            <div class="mr-2 cursor-pointer"
                 :class="{ 'underline': !skill }"
                 @click="skill = !skill">Soft Skills</div>
            <div v-if="!skill"
                 class="cursor-pointer text-gray-400"
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

    </div>
  </div>
</template>

<script>
import IconArrowsPointingIn from '@/components/icons/IconArrowsPointingIn.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import IconEyeSlash from '@/components/icons/IconEyeSlash.vue'
import AppSkill from '@/components/AppSkill.vue'
import AppDiagramm from '@/components/AppDiagramm.vue'

export default {
  name: "FullStudentCard",
  components: {
    IconArrowsPointingIn, IconArrowUp, IconEyeSlash, AppSkill, IconArrowDown, AppDiagramm
  },
  props: {
    students: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      skill: true,
      student: this.students[0],
      sortByNameAsc: false,
      sortByGradeAsc: false,
      sortByGradeSoft: false,
      sortByGradeHard: false,
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
    sortByName() {
      this.sortByNameAsc = !this.sortByNameAsc;
    },
    sortByGrade() {
      this.sortByGradeAsc = !this.sortByGradeAsc;
    },
    setSortByGradeSoft() {
      this.sortByGradeSoft = !this.sortByGradeSoft;
    },
    setSortByGradeHard() {
      this.sortByGradeHard = !this.sortByGradeHard;
    },
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
}

.profession {
  font-size: 1rem;
  text-align: center;
}
</style>
