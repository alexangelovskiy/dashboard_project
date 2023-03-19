import { createStore } from "vuex";

export default createStore({
  state: {
    specialty: ["Анализ данных в биологии","Бизнес-информатика","Геоинформационные технологии","Государственное и муниципальное управление","Межкультурная коммуникация","Инфокоммуникационные технологии","Киберфизические системы","История современного мира","Кинопроизводство","Молекулярная биотехнология","Компьютерная безопасность","Компьютерная лингвистика","ЛигалТех","Машинное обучение","Международный спортивный менеджмент","Науки о данных (Data Science)","Прикладная политология ","Прикладная электроника и фотоника","Прикладной анализ данных","Публичное право","Современные компьютерные науки","Стратегическое управление логистикой","Управление продуктом","Физика","Финансовые технологии и анализ данных","Фундаментальная лингвистика","Цифровые инновации","Экономика и статистика"],
    disciplines: [
      "Автоматизация сквозных процессов предприятия",
      "Автоматизированные системы обеспечения электронных средств",
      "Автоматическая обработка естественного языка",
      "Автоматическая обработка текста",
      "Агентская деятельность и трансферы в спорте",
      "Актуальные проблемы биоэкономики и биотехнологии",
      "Алгебра",
      "Алгоритмы в биоинформатике",
      "Алгоритмы и структуры данных",
      "Алгоритмы обработки больших данных",
      "Анализ данных в бизнесе",
      "Анализ данных для лингвистов",
      "Анализ данных с временной структурой",
      "Анализ и визуализация текстовых данных",
      "Анализ и прогнозирование неоднородных временных рядов",
      "Анализ и прогнозирование рыночных рисков",
      "Анализ изображений и видео",
      "Анализ программных реализаций алгоритмов защиты",
      "Анализ сетевых структур",
      "Анализ текстов. Генеративные модели",
      "Аналитическая механика",
      "Аналитические и численные методы моделирования",
      "Аналоговые и цифровые устройства",
      "Английский язык",
      "Англо-Русский перевод",
      "Антропологический поворот в истории ХХ века",
      "Арабский язык",
      "Архивная революция и советская история",
      "Архитектура компьютера и операционные системы",
      "Архитектура предприятия",
      "Атомная и молекулярная спектроскопия",
      "Аудит банковской деятельности",
      "Байесовская статистика",
      "Байесовские методы в машинном обучении",
      "Бизнес-аналитика в управлении цепями поставок",
      "Бизнес-коммуникации",
      "Бизнес-модели электронного бизнеса",
      "Биоинформатика для высокопроизводительного секвенирования",
      "Биотехнология",
      "Введение в высшую математику",
      "Введение в глубинное обучение",
      "Введение в историю искусств",
      "Введение в машинное обучение",
      "Введение в молекулярную биологию",
      "Введение в программирование",
      "Введение в языкознание",
      "Венчурные инвестиции в биомедицинские стартапы",
      "Взаимодействие с органами государственной власти",
      "Временные ряды",
      "Вычислительная инфраструктура в задачах биоинформатики",
      "Вычислительная физика",
      "Вычислительные методы в сверхпроводящей электронике",
      "Геомаркетинг и анализ территорий",
      "Геофизические и геохимические методы в географии",
      "Глубинное обучение",
      "Государственная политика в социальной сфере",
      "Государственное регулирование внешней торговли",
      "Государственное управление сферой спорта",
      "Деловые коммуникации",
      "Демографические факторы экономического развития",
      "Дискретная математика",
      "Дифференциальные и разностные уравнения",
      "Дифференциальные уравнения",
      "Драматургия",
      "Запуск ML моделей в промышленной среде",
      "Защита в операционных системах",
      "Защита каналов связи с использованием VPN",
      "Защита компьютерных сетей и систем",
      "Защита программ и данных",
      "Защита серверов и рабочих станций",
      "Земные сферы: атмосфера и гидросфера",
      "Изменения природной среды и палеогеография",
      "Инвестиционный менеджмент",
      "Инновационные транспортные технологии",
      "Информационные системы",
      "Испанский язык",
      "Историческая текстология",
      "История",
      "История и теория медиа",
      "История исторической науки",
      "История лингвистических учений",
      "История России",
      "История театра",
      "Качественные методы в социологическом исследовании",
      "Квантовая криптография",
      "Квантовая механика",
      "Квантовые вычисления",
      "Ключевые технологии в LegalTech",
      "Количественные финансы",
      "Комбинаторные конструкции в теоретической информатике",
      "Компиляторные технологии",
      "Компьютерная лингвистика и анализ текста",
      "Компьютерное зрение",
      "Компьютерные измерительные технологии",
      "Компьютерные сети и телекоммуникации",
      "Конституция и экономика",
      "Конструирование ядра операционных систем",
      "Корпусная лингвистика",
      "Криптографические методы защиты информации",
      "Криптографические протоколы",
      "Культура работы с данными",
      "Культура речи",
      "Лазерная физика",
      "Ландшафт и энергия",
      "Латинский язык",
      "Лидерство в государственных организациях",
      "Лингвистическая типология",
      "Линейная алгебра",
      "Локализация и интернационализация вебсайтов",
      "Магнетизм, спинтроника и фотоника",
      "Макроэкономика",
      "Маркетинг",
      "Маркетинговые исследования",
      "Математика для Data Science",
      "Математическая логика и теория алгоритмов",
      "Математическая физика",
      "Математические методы в психологии",
      "Математические методы физики",
      "Математические основания компьютерной лингвистики",
      "Математический анализ",
      "Материалы и приборы для нано- и оптоэлектроники",
      "Машинное обучение",
      "Медицинская биотехнология",
      "Международный спортивный менеджмент",
      "Методология политических исследований",
      "Методы анализа данных",
      "Методы верификации и тестирования протоколов",
      "Методы исследований в логистике",
      "Методы оптимизации",
      "Методы поиска уязвимостей информационных систем",
      "Методы принятия управленческих решений",
      "Методы теоретической информатики",
      "Механика",
      "Микро- и наноэлектроника",
      "Микроэкономика",
      "Мировая литература",
      "Модели безопасности компьютерных систем",
      "Молекулярное моделирование",
      "Муниципальное управление",
      "Налогообложение и налоговые реформы",
      "Наука о данных для юристов",
      "Нейролингвистика",
      "Неопределённость при анализе данных",
      "Нормативное обеспечение информационной безопасности",
      "Облачные технологии",
      "Обработка и анализ больших массивов данных",
      "Обучение языку С++",
      "Общая теория связи",
      "Операционные системы",
      "Операционный менеджмент и маркетинг",
      "Основы веб-разработки",
      "Основы геоэкологии и теории экосистем",
      "Основы демографии и географии населения",
      "Основы информационной безопасности",
      "Основы кинетической теории газов",
      "Основы права",
      "Основы программирования на Python",
      "Основы риск-менеджмента",
      "Основы телевидения и радиосвязи",
      "Основы устойчивого развития и ESG",
      "Ответственность органов местного самоуправления",
      "Переводческие процессы и решения",
      "Перспективные системы управления базами данных",
      "Политика государства в отношении предпринимательства",
      "Политическая наука",
      "Политический менеджмент",
      "Постколониальные исследования и история империй",
      "Построение инфокоммуникационных систем и сетей",
      "Построение новых моделей данных",
      "Право",
      "Право интеллектуальной собственности",
      "Правовая грамотность",
      "Правовые аспекты медиа",
      "Практикум по квантовой фотонике",
      "Практикум по криптографии",
      "Прикладная статистика для анализа данных",
      "Прикладной системный анализ",
      "Проблема “Россия-Запад” в общественной мысли",
      "Программирование на языке R",
      "Продюсирование ТВ-программ",
      "Проектирование и управление биотехнологическим производством",
      "Пространство политического в России начала XX вв.",
      "Прототипирование",
      "Публично-правовые аспекты некоммерческих организаций",
      "Развитие нового продукта",
      "Распределенные вычисления",
      "Распределенные системы",
      "Режиссура аудиовизуального продукта",
      "Римское право",
      "Практики государственного управления Российской империей",
      "Системная биология и биоинформатика",
      "Социолингвистика",
      "Социология",
      "Спортивное право",
      "Сравнительная геномика",
      "Статистика",
      "Стратегии цифровизации логистики",
      "Стратегический менеджмент",
      "Стратегическое развитие логистической инфраструктуры",
      "Структурная биоинформатика и моделирование лекарств",
      "Таможенные операции в глобальных цепях поставок",
      "Таможенные процедуры при внешнеторговой деятельности",
      "Теоретическая криптография",
      "Теория баз данных",
      "Теория вероятностей",
      "Теория игр",
      "Технологии кинопроизводства",
      "Технологии пентестинга",
      "Технологии противодействия компьютерным атакам",
      "Технологические проблемы права",
      "Управление договорами в спорте",
      "Управление интеллектуальными видами спорта",
      "Управление цифровыми цепями поставок",
      "Управленческий учет",
      "Физика",
      "Философия",
      "Философская и социальная теория современности",
      "Финансовые институты и риски",
      "Финансовые технологии",
      "Финансы и налогообложение в сфере спорта",
      "Формальное представление естественного языка",
      "Формальные методы программной инженерии",
      "Функциональное программирование",
      "Функциональные модели в естественном языке",
      "Цифровая картография и геоинформационные системы",
      "Цифровые инновации",
      "Численное моделирование в политической науке",
      "Эконометрика",
      "Экономика",
      "Экономика медиа",
      "Этика и право",
      "Юнит-Экономика",
      "Юридическая аргументация",
      "HR бренд публичной организации",
      "HR менеджмент в публичном секторе",
      "SQL и noSQL базы данных",
    ],
    universities: ["ВШЭ", "МГУ", "СПБГУ", "ИТМО", "НИЯУ МИФИ", "НИУ МИСИС", "РГГУ", "РАНХИГС"],
    qualification: ["Магистр", "Бакалавр"],
    skills: [
      "Алгоритмы",
      "Анализ данных",
      "Аналитика",
      "Аналитическое мышление",
      "Архитектура систем",
      "Биотехнологии",
      "Веб-разработка",
      "Визуальная и территориальная аналитика",
      "Визуальная и территориальная аналитика",
      "Внимательность",
      "Иностранные языки",
      "Информационные системы",
      "Кибербезопасность",
      "Коммуникации и радиосвязь",
      "Криптография",
      "Критическое мышление",
      "Математика",
      "Наноэлектроника",
      "Обучаемость",
      "Операционные системы",
      "Ответственность",
      "Программирование",
      "Программная инженерия",
      "Работа в команде",
      "Самостоятельность",
      "Социальные науки",
      "Транспортные технологии",
      "Упорство",
      "Управление временем",
      "Функциональные модели",
    ],
    students: [],
    filter: "",
    specialty_selected: "",
    university_selected: "",
    qualification_selected: "",
    disciplines_selected: [],
    skills_selected: [],
    isFiveDisciplines: false,
    minAvgScore: 1,
    maxAvgScore: 5,
    currentStudent: [],
    statusCard: "",
    filtered_students: [],
    hidden_students: [],
    showHiddenStudents: false,
    color_scheme: {
      color: ['#00ff00', '#ffff00', '#ff9900', '#ff0000'],
      black: ['#ccc', '#999', '#666', '#000'],
    },
    currentColorScheme: 'color'
  },
  getters: {
    statusCard: (state) => state.statusCard,
    disciplines: (state) => state.disciplines,
    skills: (state) => state.skills,
    color_scheme: (state) => state.color_scheme,
    currentColorScheme: (state) => state.currentColorScheme,
    specialty: (state) => state.specialty,
    minAvgScore: (state) => state.minAvgScore,
    maxAvgScore: (state) => state.maxAvgScore,
    universities: (state) => state.universities,
    qualification: (state) => state.qualification,
    currentStudent: (state) => state.currentStudent,
    students: (state) => state.students,
    filter: (state) => state.filter,
    specialty_selected: (state) => state.specialty_selected,
    university_selected: (state) => state.university_selected,
    qualification_selected: (state) => state.qualification_selected,
    disciplines_selected: (state) => state.disciplines_selected,
    skills_selected: (state) => state.skills_selected,
    filtered_students: (state) => state.filtered_students,
    showHiddenStudents: (state) => state.showHiddenStudents,
  },
  mutations: {
    setJsonData(state, data) {
      state.students = data;
    },
    setHiddenStudents(state, data) {
      state.hidden_students.push(data);
    },
    setShowHiddenStudents(state, data) {
      state.hidden_students = state.hidden_students.filter((student) => student.id !== data.id);
    },
    setFixedStudent(state, data) {
      state.statusCard = "fixed";
      if(state.currentStudent.length < 2) state.currentStudent.push(data);
    },
    setFullStudent(state, data) {
      state.statusCard = "full";
      state.currentStudent.push(data);
    },
    setFilter(state, filterValue) {
      state.filter = filterValue;
    },
    setMinAvgScore(state, filterValue) {
      state.minAvgScore = filterValue;
    },
    setMaxAvgScore(state, filterValue) {
      state.maxAvgScore = filterValue;
    },
    setSpeciality(state, filterValue) {
      state.specialty_selected = filterValue;
    },
    setUniversity(state, filterValue) {
      state.university_selected = filterValue;
    },
    setQualification(state, filterValue) {
      state.qualification_selected = filterValue;
    },
    setSelectedDisciplines(state, filterValue) {
      state.disciplines_selected = filterValue;
    },
    setDisciplinesFive(state, filterValue) {
      state.isFiveDisciplines = filterValue;
    },
    setSelectedSkills(state, filterValue) {
      state.skills_selected = filterValue;
    },
    setSkillsFive(state, filterValue) {
      state.isFiveSkills = filterValue;
    },
    setFilteredStudents(state, students) {
      state.filtered_students = students;
    },
    setSpecialityClear(state) {
      state.specialty_selected = "";
    },
    setDisciplinesClear(state) {
      state.disciplines_selected = [];
    },
    setSkillsClear(state) {
      state.skills_selected = [];
    },
    setUniversityClear(state) {
      state.university_selected = "";
    },
    setQualificationClear(state) {
      state.qualification_selected = "";
    },
    setStudentClear(state) {
      state.statusCard = "";
      state.currentStudent = [];
    },
    switchHiddens(state) {
      state.showHiddenStudents = !state.showHiddenStudents;
    },
    setColorScheme(state, value) {
      state.currentColorScheme = value;
    },
  },
  actions: {
    filterStudents({ state, commit }) {
      let filteredStudents = null;
      if (!state.showHiddenStudents) {
        filteredStudents = state.students.filter((student) => {
          const nameMatch = student.name.toLowerCase().includes(state.filter.toLowerCase());
          const specialtyMatch = student.specialty.toLowerCase().includes(state.specialty_selected.toLowerCase());
          const universityMatch = student.university.toLowerCase().includes(state.university_selected.toLowerCase());
          const qualificationMatch = student.qualification.toLowerCase().includes(state.qualification_selected.toLowerCase());
          const avgScoreMatch = student.avg_score >= state.minAvgScore && student.avg_score <= state.maxAvgScore;
          const excludeFixedStudent = state.currentStudent.some(curStudent=> curStudent.id === student.id);
          const excludeHiddenStudent = state.hidden_students.some((hidden_student) => hidden_student.id === student.id);

          let disciplinesMatch = null;
          if (!state.isFiveDisciplines) {
            disciplinesMatch = state.disciplines_selected.every((discipline) => {
              return student.disciplines.some((studentDiscipline) => {
                return studentDiscipline.name.toLowerCase() === discipline.toLowerCase();
              });
            });
          } else {
            disciplinesMatch = state.disciplines_selected.every((discipline) => {
              return student.disciplines.some((studentDiscipline) => {
                return studentDiscipline.name.toLowerCase() === discipline.toLowerCase() && studentDiscipline.score === 5;
              });
            });
          }

          let skillsMatch = null;
          let skills_summ = [...student.key_skills_hard, ...student.key_skills_soft];

          if (!state.isFiveSkills) {
            skillsMatch = state.skills_selected.every((skill) => {
              return skills_summ.some((studentSkill) => {
                return studentSkill.name.toLowerCase() === skill.toLowerCase();
              });
            });
          } else {
            skillsMatch = state.skills_selected.every((skill) => {
              return skills_summ.some((studentSkill) => {
                return studentSkill.name.toLowerCase() === skill.toLowerCase() && studentSkill.score === 5;
              });
            });
          }
          return (
            !excludeFixedStudent &&
            !excludeHiddenStudent &&
            nameMatch &&
            specialtyMatch &&
            universityMatch &&
            qualificationMatch &&
            avgScoreMatch &&
            disciplinesMatch &&
            skillsMatch
          );
        });
      } else {
        filteredStudents = state.hidden_students.filter((student) => {
          const nameMatch = student.name.toLowerCase().includes(state.filter.toLowerCase());
          const specialtyMatch = student.specialty.toLowerCase().includes(state.specialty_selected.toLowerCase());
          const universityMatch = student.university.toLowerCase().includes(state.university_selected.toLowerCase());
          const qualificationMatch = student.qualification.toLowerCase().includes(state.qualification_selected.toLowerCase());
          const avgScoreMatch = student.avg_score >= state.minAvgScore && student.avg_score <= state.maxAvgScore;
          const excludeFixedStudent = student.id === state.currentStudent.id;
          let disciplinesMatch = null;
          if (!state.isFiveDisciplines) {
            disciplinesMatch = state.disciplines_selected.every((discipline) => {
              return student.disciplines.some((studentDiscipline) => {
                return studentDiscipline.name.toLowerCase() === discipline.toLowerCase();
              });
            });
          } else {
            disciplinesMatch = state.disciplines_selected.every((discipline) => {
              return student.disciplines.some((studentDiscipline) => {
                return studentDiscipline.name.toLowerCase() === discipline.toLowerCase() && studentDiscipline.score === 5;
              });
            });
          }

          let skillsMatch = null;
          let skills_summ = [...student.key_skills_hard, ...student.key_skills_soft];

          if (!state.isFiveSkills) {
            skillsMatch = state.skills_selected.every((skill) => {
              return skills_summ.some((studentSkill) => {
                return studentSkill.name.toLowerCase() === skill.toLowerCase();
              });
            });
          } else {
            skillsMatch = state.skills_selected.every((skill) => {
              return skills_summ.some((studentSkill) => {
                return studentSkill.name.toLowerCase() === skill.toLowerCase() && studentSkill.score === 5;
              });
            });
          }
          return !excludeFixedStudent && 
          nameMatch && 
          specialtyMatch && 
          universityMatch && 
          qualificationMatch && 
          avgScoreMatch && 
          disciplinesMatch &&
          skillsMatch
        });
      }

      commit("setFilteredStudents", filteredStudents);
    },
  },
  modules: {},
});
