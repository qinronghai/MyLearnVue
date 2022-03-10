<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input @change="checkAll" type="checkbox" :checked="isAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ completedTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="cleanAll" >清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo","clearAllTodo"],
  computed: {
    total() {
      return this.todos.length;
    },
    completedTotal() {
      /*  return this.todos.reduce((pre, cur) => {
        return pre + (cur.completed ? 1 : 0);
      }, 0); */
      return this.todos.reduce(
        (pre, todo) => pre + (todo.completed ? 1 : 0),
        0
      );
    },
    isAll: {
      get() {
        return this.completedTotal === this.total && this.total > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    /* checkAll(e) {
      this.checkAllTodo(e.target.checked);
    }, */
    cleanAll(){
      this.clearAllTodo();
    }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>