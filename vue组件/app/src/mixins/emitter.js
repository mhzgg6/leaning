export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$option.name;

      while(parent && (!name || name !== componentName)) {
        // parent = 
      }
    }
  }
}