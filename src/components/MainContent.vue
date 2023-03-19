<template>
  <div class="fixed-container flex py-5 overflow-hidden border-r-2"
        :style="{'min-width': currentStudent.length === 1 ? '480px ': '932px'}"
       v-if="$store.getters.statusCard === 'fixed'">
    <FixedStudentCard 
                      :students="currentStudent" />
  </div>
  <div class="mc-container flex p-5 overflow-hidden"
       v-if="$store.getters.statusCard === 'full'">
    <FullStudentCard class="mr-5"
                     :students="currentStudent" />
  </div>
  <div @wheel.prevent="onWheel"
       class="mc-container flex p-5 overflow-y-hidden"
       ref="mcContainer"
       v-if="$store.getters.statusCard !== 'full'">
    <StudentCard class="mr-5"
                 v-for="student in filtered_students"
                 :key="student.id"
                 :student="student" />
  </div>
</template>

<script>
import StudentCard from '@/components/StudentCard.vue'
import FixedStudentCard from '@/components/FixedStudentCard.vue'
import FullStudentCard from '@/components/FullStudentCard.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'LeftMenu',
  components: {
    StudentCard, FixedStudentCard, FullStudentCard
  },
  computed:{
    ...mapGetters(['filtered_students', 'currentStudent'])
  },
  methods: {
    onWheel(e) {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      const direction = delta && (delta > 0 ? 1 : -1);

      if (direction === 1) {
        const container = this.$refs.mcContainer;
        container.scrollLeft += 40;
      } else if (direction === -1) {
        const container = this.$refs.mcContainer;
        container.scrollLeft -= 40;
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mc-container {
  width: 100%;
  overflow-x: auto;
  border-right: 1px solid #4080e725;
}

.fixed-container {
  
  background: linear-gradient(to bottom, #4081e7, #76f0c6);
}
</style>
