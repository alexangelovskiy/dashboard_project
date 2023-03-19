<template>
    <div class="circle-progress">
        <svg :width="size"
             :height="size"
             viewBox="0 0 200 200"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg">
            <circle r="90"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    stroke="#dee6f3"
                    stroke-width="10"></circle>
            <circle ref="bar"
                    r="90"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    :stroke="getColors"
                    :stroke-width="barWidth"
                    :stroke-dasharray="dashArray"
                    :stroke-dashoffset="dashOffset"
                    transform="rotate(-90, 100, 100)"></circle>
        </svg>
        <div class="circle-progress-label">{{ label }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'AppGiagramm',
    props: {
        percent: {
            type: Number,
            default: 100,
            validator: (value) => value >= 0 && value <= 100,
        },
        size: {
            type: Number,
            default: 150,
        },
        barColor: {
            type: String,
            default: "#76f0c6",
        },
        barWidth: {
            type: Number,
            default: 20,
        },
        label: {
            type: [String, Number],
            default: "100%",
        },
    },
    computed: {
        ...mapGetters(['currentColorScheme', 'color_scheme']),
        circumference() {
            return 2 * Math.PI * 90;
        },
        dashArray() {
            return `${this.circumference} ${this.circumference}`;
        },
        dashOffset() {
            return this.circumference - (this.percent / 100) * this.circumference;
        },
        getColors() {
            if (this.percent >= 92) {
                return this.color_scheme[this.currentColorScheme][0]
            }
            if (this.percent >= 80 && this.percent <= 91) {
                return this.color_scheme[this.currentColorScheme][1]
            }
            if (this.percent >= 72 && this.percent <= 79) {
                return this.color_scheme[this.currentColorScheme][2]
            }
            if (this.percent <= 71) {
                return this.color_scheme[this.currentColorScheme][3]
            }
        }
    },
};
</script>
<style scoped>
.circle-progress {
    position: relative;
    display: inline-block;
    margin: 2em;
    text-align: center;
}

.circle-progress-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
    font-weight: bold;
}
</style>