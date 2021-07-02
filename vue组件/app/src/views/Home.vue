<template>
  <div class="home">
    <i-button size="large" @on-click="handle">
      <strong>按钮 2</strong>
    </i-button>
    <TestA />
    <button @click="handleClick">触发事件</button>
    <TestB />
  </div>
</template>

<script>
// @ is an alias to /src
import IButton from '@/components/HelloWorld.vue'
import TestA from '@/components/TestA.vue'
import TestB from '@/components/TestB.vue'
import Emitter from "../mixins/emitter"

export default {
  provide: {
    name: 'Mao'
  },
  mixins: [Emitter],
  name: 'Home',
  components: {
    IButton,
    TestA,
    TestB,
  },
  methods: {
    handle() {
      
    },
    handleClick() {
      this.broadcast('TestB', 'on-message', 'Hello Vue js');
    }
  }
}
</script>
