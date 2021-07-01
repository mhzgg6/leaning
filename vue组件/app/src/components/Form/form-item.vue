<template>
  <div>
    <label v-if="label">{{label}}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter"

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  mixins: [ Emitter ],
  components: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  created() {},
  //  组件渲染时 将实例缓存在 Form 中
  mounted() {
    //  如果没传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this);
      this.setRules();
    }
  },
  //  组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch('iForm', 'on-form-item-remove', this);
  },
  methods: {
    setRules() {
      this.$on('on-form-blur', this.onFieldBlur);
      this.$on('on-form-change', this.onFieldChange);
    },
    onFieldBlur() {

    },
    onFieldChange() {

    }
  },
};
</script>
<style lang="less" scoped>
</style>