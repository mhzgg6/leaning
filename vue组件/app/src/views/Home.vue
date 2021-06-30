<template>
  <div class="home">
    <i-button size="large" @on-click="handle">
      <strong>按钮 2</strong>
    </i-button>
    <TestA />
  </div>
</template>

<script>
// @ is an alias to /src
import IButton from '@/components/HelloWorld.vue'
import TestA from '@/components/TestA.vue'

export default {
  provide: {
    name: 'Mao'
  },
  name: 'Home',
  components: {
    IButton,
    TestA
  },
  methods: {
    handle() {
      
    }
  }
}
</script>
