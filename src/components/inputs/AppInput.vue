<template>
  <input :type="type"
         :placeholder="placeholderText"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
         class="input focus:outline-none"
         :class="{ 
          'bg-transparent border-2 border-white text-white placeholder:text-slate-300': transparent !== undefined
          }">
</template>
  
<script>
export default {
  name: 'AppInput',
  props: {
    modelValue: {
      default: ''
    },
    placeholderText: {
      type: String,
      default: 'Поиск...'
    },
    type: {
      type: String,
      default: 'string'
    },
    transparent: {
      type: null,
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
}
</script>
  
<style scoped>
.input {
  width: 100%;
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
