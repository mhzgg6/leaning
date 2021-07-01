<template>
  <input 
    type="text"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script>
import Emitter from "../../mixins/emitter"

export default {
  name: 'iInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  mixins: [ Emitter ],
  components: {},
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleInput( event ) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('input', value);
      this.dispatch('iFormItem', 'on-form-change', value);
    },
    handleBlur() {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue);
    }
  },
};
</script>
<style lang="less" scoped>
</style>