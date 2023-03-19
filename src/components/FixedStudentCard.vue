<template>
  <div v-for="student in students" :key="student.id" class="card rounded-tl-large rounded-br-large border-2 border-blue-300 ">
    <!-- {{ student }} -->
    <!-- <template v-if="student.length"> -->
    <div class="grid grid-cols-3 w-full mb-10 p-4">
      <div></div>
      <div class="flex justify-center text-3xl font-bold">{{ student?.int_score }}</div>
      <div class="flex gap-x-3 justify-end">
        <!-- <div class="flex items-center justify-center">
            <IconArrowsPointingOut />
          </div> -->
        <div class="flex items-center justify-center cursor-pointer"
             @click="unPinCard">
          <IconPinOpen />
        </div>
        <!-- <div class="flex items-center justify-center">
            <IconEyeSlash />
          </div> -->
      </div>
    </div>
    <div class="h-full relative">
      <div class="flex justify-center items-center flex-col">
        <div class="text-blue-400 font-bold text-3xl whitespace-normal text-center mb-4 h-24 w-2/3">
          <div>{{ student?.name }}</div>
        </div>

      </div>

      <CardFirstView v-if="page === 1"
                     :student="student" />
      <CardSecondView v-if="page === 2"
                      :student="student" />
      <CardThirdView v-if="page === 3"
                     :student="student" />

    </div>
    <div class="flex mb-4 -mt-8 z-10">
      <div class="w-3 cursor-pointer h-3 bg-gray-400 mr-2 rounded-full"
           :class="{ 'bg-gray-500': page === 1 }"
           @click="page = 1"></div>
      <div class="w-3 cursor-pointer h-3 bg-gray-400 mr-2 rounded-full"
           :class="{ 'bg-gray-500': page === 2 }"
           @click="page = 2"></div>
      <div class="w-3 cursor-pointer h-3 bg-gray-400 rounded-full"
           :class="{ 'bg-gray-500': page === 3 }"
           @click="page = 3"></div>
    </div>
    <!-- </template> -->
  </div>
</template>

<script>
import IconArrowsPointingOut from '@/components/icons/IconArrowsPointingOut.vue'
import IconPinOpen from '@/components/icons/IconPinOpen.vue'
import CardFirstView from '@/components/student_card_views/CardFirstView.vue'
import CardSecondView from '@/components/student_card_views/CardSecondView.vue'
import CardThirdView from '@/components/student_card_views/CardThirdView.vue'
import IconEyeSlash from '@/components/icons/IconEyeSlash.vue'


export default {
  name: "FixedStudentCard",
  components: {
    IconArrowsPointingOut, IconPinOpen, IconEyeSlash, CardFirstView, CardSecondView, CardThirdView
  },
  props: {
    students: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      page: 1
    }
  },
  methods: {
    unPinCard() {
      this.$store.commit('setStudentClear')
      this.$store.dispatch('filterStudents')

    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 450px;
  max-width: 450px;
  background-color: #fff;
  margin-right: 10px;
}

.profession {
  font-size: 1rem;
  text-align: center;
}
</style>
