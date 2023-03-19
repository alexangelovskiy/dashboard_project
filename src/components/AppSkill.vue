<template>
    <div class="relative"
         ref="skill">
        <div class="chip font-bold text-xl relative"
             :class="{ 'underline cursor-pointer': skill.second_level }"
             @click="toggleSecondLevel">
            <span class="mr-4">{{ skill.name }}</span>
            {{ skill.score }}
        </div>
        <div class="second-level__container"
             v-if="showSecondLevel && skill.second_level">
            <div class="second-level font-bold text-xl"
                 v-for="secondSkill in skill.second_level"
                 @click="toggleThirdLevel"
                 :class="{ 'underline cursor-pointer': secondSkill?.third_level }"
                 :key="secondSkill">
                <span class="mr-4">{{ secondSkill.name }}</span>
                {{ secondSkill.score }}
                <div class="third-level__container"
                     v-if="showThirdLevel && secondSkill?.third_level">
                    <div class="second-level font-bold text-xl flex"
                         v-for="thirdSkill in secondSkill?.third_level"
                         :key="thirdSkill">
                        <span class="mr-4">{{ thirdSkill.name }}</span>
                        {{ thirdSkill.score }}
                        <div v-if="thirdSkill.description" class="border-dashed text-center ml-4 w-6 h-6 relative hover:text-blue-300 text-lime-500">
                            <IconInfo/>
                            <div class="info">{{thirdSkill.description}}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import IconInfo from '@/components/icons/IconInfo.vue';
export default {
    name: "AppSkill",
    components: {
        IconInfo
    },
    props: {
        skill: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            showSecondLevel: false,
            showThirdLevel: false,
        };
    },
    methods: {
        toggleSecondLevel() {
            this.showSecondLevel = !this.showSecondLevel;
        },
        toggleThirdLevel() {
            this.showThirdLevel = !this.showThirdLevel;
        },
        closeMenu() {
            this.showSecondLevel = false
            this.showThirdLevel = false
        }
    },
    watch: {
        showSecondLevel(value) {
            if (value) {
                document.addEventListener('click', (event) => {
                    if (!this.$refs.skill?.contains(event.target)) {
                        this.closeMenu();
                    }
                });
            }
        }
    }
};
</script>
  
<style lang="scss" scoped>
.chip {
    border: 1px solid black;
    background-color: #f1f2f6;
    border-radius: 10px;
    padding: 0.5rem;
}

.second-level__container {
    position: absolute;
    bottom: 118%;
    left: 0;
    z-index: 10;
    width: 300px;
    background: #f1f2f6;
    border: 0px solid #cecdcd;
    border-radius: 10px;
    padding: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;

    .second-level {
        margin-top: 10px;
        border: 2px solid #76f0c6;
        border-radius: 10px;
        padding: 10px;

        &:last-child {
            margin-top: 0;
        }
    }
}

.third-level__container {
    position: absolute;
    bottom: 0;
    left: 103%;
    z-index: 10;
    width: 300px;
    background: #f1f2f6;
    border: 0px solid #cecdcd;
    border-radius: 10px;
    padding: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    cursor: default;

    .test:hover {
        background: red;
    }

    .info {
        display: none;
        position: absolute;
        bottom: 105%;
        left: 105%;
        width: 300px;
        background: #e0e0e0a6;
        backdrop-filter: blur(2px);
        padding: 10px;
        z-index: 10;
        font-size: 15px;
        border-radius: 10px;
        text-align: left;
        color: black;
    }

    .text-center:hover .info {
        display: block;
    }

    .second-level {
        margin-top: 10px;
        border: 2px solid #4081e7;
        border-radius: 10px;
        padding: 10px;

        &:last-child {
            margin-top: 0;
        }
    }
}
</style>
  