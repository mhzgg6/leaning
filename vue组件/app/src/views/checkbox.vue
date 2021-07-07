<template>
  <div>
    <h3>组合多选框组件——CheckboxGroup & Checkbox</h3>

    <i-checkbox v-model="single">单独选项</i-checkbox>

    <br>
    数据：{{ single }}

    <br><br>

    <i-checkbox-group v-model="multiple">
        <i-checkbox label="option1">选项 1</i-checkbox>
        <i-checkbox label="option2">选项 2</i-checkbox>
        <i-checkbox label="option3">选项 3</i-checkbox>
        <i-checkbox label="option4">选项 4</i-checkbox>
    </i-checkbox-group>

    <br>
    数据：{{ multiple }}
    </div>
</template>

<script>
import ICheckbox from "../components/checkbox/checkbox.vue";
import ICheckboxGroup from "../components/checkbox/checkbox-group.vue";

export default {
  name: 'Checkbox',
  props: {},
  components: { ICheckbox, ICheckboxGroup },
  data() {
    return {
      single: true,
       multiple: ['option1']
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
</style>