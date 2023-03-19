<template>
  <div class="lm-container">
    <div class="mb-8 w-full flex">
      <AppInput v-model="fio_input"
                placeholderText="Поиск по ФИО" />
    </div>

    <!-- ВУЗ -->
    <div class="lm-spec">
      <div class="input-title ml-2">ВУЗ</div>
    </div>
    <div class="lm-selector mb-4">
      <AppSelector :options="universities"
                   @selected="getSelectUniversity"
                   @clear="clearUniversity" />
    </div>

    <!-- Уровень -->
    <div class="lm-spec">
      <div class="input-title ml-2">Уровень</div>
    </div>
    <div class="lm-selector mb-4">
      <AppSelector :options="qualification"
                   @selected="getSelectQualification"
                   @clear="clearQualification" />
    </div>

    <!-- Специальность -->
    <div class="lm-spec">
      <div class="input-title ml-2">Специальность</div>
    </div>
    <div class="lm-selector mb-4">
      <AppSelector :options="specialty"
                   @selected="getSelectSpeciality"
                   @clear="clearSpeciality" />
    </div>

    <!-- Средний балл -->
    <div class="lm-spec">
      <div class="input-title ml-2">Средний балл</div>
    </div>
    <div class="flex justify-between">
      <div class="lm-selector mb-4 mr-1 w-1/2">
        <AppInput v-model="min_score"
                  type="number"
                  placeholderText="0"
                  transparent />
      </div>
      <div class="lm-selector mb-4 w-1/2 ml-1">
        <AppInput v-model="max_score"
                  type="number"
                  placeholderText="5,0"
                  transparent />
      </div>
    </div>

    <!-- Дисциплины -->
    <div class="lm-spec flex justify-between">
      <div class="input-title ml-2">Дисциплины</div>
      <div class="mr-1">«5»</div>
    </div>
    <div class="w-2/3">
      <AppSelectorMultiple :options="disciplines"
                           @clear="getDisciplinesClear"
                           @selected="getDisciplines"
                           @checkboxStatus="getDisciplinesFive"
                           class="mb-6" />
    </div>

    <!-- Навыки -->
    <div class="lm-spec flex justify-between">
      <div class="input-title ml-2">Навыки</div>
      <div class="mr-1">«5»</div>
    </div>
    <div class="w-2/3">
      <AppSelectorMultiple :options="skills"
                           @clear="getSkillsClear"
                           @selected="getSkills"
                           @checkboxStatus="getSkillsFive"
                           class="mb-6" />
    </div>


    <!-- Показывать скрытые анкеты -->
    <AppCheckbox class="mb-6"
                 :labelRight="true"
                 @checkboxStatus="showHiddenStudents = !showHiddenStudents" />

    <div class="flex items-end w-full h-full -ml-1">
      <AppSettings/>
    </div>
    
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import AppInput from '@/components/inputs/AppInput.vue'
import AppCheckbox from '@/components/inputs/AppCheckbox.vue'
import AppSelector from '@/components/selectors/AppSelector.vue'
import AppSelectorMultiple from '@/components/selectors/AppSelectorMultiple.vue'
import AppSettings from '@/components/AppSettings.vue'

export default {
  name: 'LeftMenu',
  components: {
    AppInput, AppSelector, AppCheckbox, AppSelectorMultiple, AppSettings
  },
  data() {
    return {
      fio_input: '',
      min_score: '',
      max_score: '',
      showHiddenStudents: false
    }
  },
  computed: {
    ...mapGetters(['specialty',
      'universities',
      'qualification',
      'minAvgScore',
      'maxAvgScore',
      'disciplines',
      'skills'])
  },
  methods: {
    ...mapMutations([
      'setFilter',
      'setSpeciality',
      'setSpecialityClear',
      'setUniversity',
      'setUniversityClear',
      'setQualification',
      'setQualificationClear',
      'setDisciplinesFive',
      'setSelectedDisciplines',
      'setDisciplinesClear',
      'setSkillsFive',
      'setSelectedSkills',
      'setSkillsClear',
      'setMinAvgScore',
      'setMaxAvgScore',
      'switchHiddens',
    ]),
    ...mapActions(['filterStudents']),

    clearSpeciality() {
      this.setSpecialityClear()
      this.filterStudents();
    },
    clearUniversity() {
      this.setUniversityClear()
      this.filterStudents();
    },
    clearQualification() {
      this.setQualificationClear()
      this.filterStudents();
    },
    getDisciplinesClear() {
      this.setDisciplinesClear()
      this.filterStudents();
    },
    getSkillsClear() {
      this.setSkillsClear()
      this.filterStudents();
    },
    getInputData(value) {
      this.setFilter(value);
      this.filterStudents();
    },
    getSelectSpeciality(value) {
      this.setSpeciality(value);
      this.filterStudents();
    },
    getSelectUniversity(value) {
      this.setUniversity(value);
      this.filterStudents();
    },
    getSelectQualification(value) {
      this.setQualification(value);
      this.filterStudents();
    },
    getDisciplines(value) {
      this.setSelectedDisciplines(value);
      this.filterStudents();
    },
    getSkills(value) {
      this.setSelectedSkills(value);
      this.filterStudents();
    },
    getDisciplinesFive(value) {
      this.setDisciplinesFive(value);
      this.filterStudents();
    },
    getSkillsFive(value) {
      this.setSkillsFive(value);
      this.filterStudents();
    },
    setInputMin(value) {
      if (value === '') {
        this.setMinAvgScore(0)
      } else {
        this.setMinAvgScore(Number(value));
      }
      this.filterStudents();
    },
    setInputMax(value) {
      if (value === '') {
        this.setMaxAvgScore(5)
      } else {
        this.setMaxAvgScore(Number(value));
      }
      this.filterStudents();
    },
  },
  created() {
    this.filterStudents();
  },
  watch: {
    fio_input(value) {
      this.getInputData(value)
    },
    min_score(value) {
      this.setInputMin(value)
    },
    max_score(value) {
      this.setInputMax(value)
    },
    showHiddenStudents() {
      this.switchHiddens()
      this.filterStudents()
    }
  },
}
</script>
<style scoped lang="scss">
.lm-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: linear-gradient(to bottom, #4081e7, #76f0c6);
  padding: 2rem 2rem;
  min-width: 300px;
  max-width: 300px;

  .lm-spec {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }
}

.lm-selector-checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  .input-title {
    font-size: 1.2rem;
    margin-right: 1rem;
    color: white;
  }

  input[type=checkbox] {
    margin-right: 1.5rem;
    appearance: none;
    width: 4rem;
    height: 3rem;
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  input[type=checkbox]:checked {
    background-color: #4081e7;
  }

  input[type=checkbox]:focus {
    outline: none;
  }
}

</style>