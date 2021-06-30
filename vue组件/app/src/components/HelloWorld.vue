<template>
  <button :class="'i-button-size-' + size" :disabled="disabled" @click="handleClick">
    按钮
    <slot></slot>
  </button>
</template>

<script>
//  判断参数是否其中之一
function oneOf (value, validList) {
  if (validList.includes(value)) {
    return true;
  }
  return false;
}

export default {
  name: 'HelloWorld',
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //  监听自定义事件 on-click
    this.$on('on-click', (text) => {
      window.alert(text)
    })
  },
  methods: {
    handleClick() {
      console.log('触发了');
      this.$emit('on-click', 'ok');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.i-button-size-default{
  font-size: 18px;
}
.i-button-size-small{
  font-size: 12px;
}
.i-button-size-large{
  font-size: 24px;
}
</style>
