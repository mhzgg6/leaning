<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'iForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      fields: []
    };
  },
  watch: {},
  computed: {},
  created() {
    this.$on('on-form-item-add', (field) => {
      if (field) this.fields.push(field);
    })
    this.$on('on-form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    })
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
</style>