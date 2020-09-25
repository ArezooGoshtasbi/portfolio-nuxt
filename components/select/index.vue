<template>
  <vSelect
    :options="options"
    :autocomplete="autocomplete"
    :searchable="isSearchable"
    :clearable="isClearable"
    :placeholder="placeholder"
    :value="value"
    :class="classContainer"
    :append-to-body="topDropDown"
    :calculate-position="withPopper"
    @input="handleInput"
  >
    <template v-slot:option="option">
      <div class="select-option">
        <img v-if="option.image" :src="option.image" />
        <span>{{ option.label }}</span>
      </div>
    </template>
  </vSelect>
</template>

<script>
// Style
import 'vue-select/src/scss/vue-select.scss'

import { createPopper } from '@popperjs/core'
import vSelect from 'vue-select'

export default {
  name: 'Select',
  components: { vSelect },
  props: {
    options: {
      type: Array,
      default() {
        return []
      },
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    isSearchable: {
      type: Boolean,
      default: false,
    },
    isClearable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: Object,
      default() {
        return null
      },
    },
    error: {
      type: Boolean,
      default: false,
    },
    topDropDown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      placement: 'top',
    }
  },
  computed: {
    classContainer() {
      return {
        error: this.error,
      }
    },
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value)
    },
    withPopper(dropdownList, component, { width }) {
      dropdownList.style.width = width
      const popper = createPopper(component.$refs.toggle, dropdownList, {
        placement: this.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -1],
            },
          },
          {
            name: 'toggleClass',
            enabled: true,
            phase: 'write',
            fn({ state }) {
              component.$el.classList.toggle(
                'drop-up',
                state.placement === 'top'
              )
            },
          },
        ],
      })

      return () => popper.destroy()
    },
  },
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
