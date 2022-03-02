export const mixin = {
  methods: {
    showName(){
      alert(this.name);
    }
  }
}
export const dataMixin = {
  data() {
    return {
      testNum: 99
    }
  },
}
