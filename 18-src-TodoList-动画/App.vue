<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @add="add"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        ></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
// 消息订阅
import pubsub from "pubsub-js";
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "CpApp",
  components: {
    MyFooter,
    MyHeader,
    MyList,
  },
  data() {
    return {
      /* todos: [
        { id: "001", title: "吃饭", completed: true },
        { id: "002", title: "睡觉", completed: false },
        { id: "003", title: "打豆豆", completed: true },
      ], */
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    //  添加一个todo
    add(todoObj) {
      // if(!todoObj)
      this.todos.unshift(todoObj);
    },
    // 勾选 or 取消一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
    },
    // 更新一个todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
      });
    },
    // 删除一个todo
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选 or 取消全选
    checkAllTodo(completed) {
      this.todos.forEach((todo) => {
        todo.completed = completed;
      });
    },
    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.completed;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    // this.$bus.$on("deleteTodo", this.deleteTodo);
    // 使用消息订阅实现删除一个todo
    this.dtId = pubsub.subscribe("deleteTodo", this.deleteTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    // this.$bus.$off("deleteTodo");
    pubsub.unsubscribe(this.dtId);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #498dda;
  border: 1px solid #1f3983;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>