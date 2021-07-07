<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter"
import { findComponentsDownward } from "../../utils/assist"

export default {
  name: 'iCheckboxGroup',
  mixins: [ Emitter ],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  data() {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  watch: {
    value() {
      this.updateModal(true);
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.updateModal(true);
  },
  methods: {
    updateModal(update) {
      this.childrens = findComponentsDownward(this, 'iCheckbox');
      if (this.childrens) {
        const { value } = this;
        this.childrens.forEach(child => {
          child.model = value;

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        })
      }
    },
    change(data) {
      this.currentValue = data;
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('iFormItem', 'on-form-change', data);
    }
  },
};
</script>
<style lang="less" scoped>
// .wrapper{}
</style>