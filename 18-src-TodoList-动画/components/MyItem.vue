<template>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="handleChange(todo.id)"
        />
        <!-- // 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
        <!-- <input
        type="checkbox"
        v-model="todo.completed"
      /> -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          v-show="todo.isEdit"
          type="text"
          ref="inputTitle"
          @blur="handleBlur(todo, $event)"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  data() {
    return {};
  },
  props: ["todo"],
  methods: {
    // 勾选 or 取消勾选
    handleChange(id) {
      this.$bus.$emit("checkTodo", id);
    },
    // 删除 使用消息订阅实现
    handleDelete(id) {
      if (confirm("确认删除吗？")) {
        // this.$bus.$emit('deleteTodo',id);
        pubsub.publish("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true; // *
      } else {
        console.log("#");
        this.$set(todo, "isEdit", true);
      }

      // this.$ref.inputTitle.focus(); // 不奏效，因为input框还未出现（Vue只有等这个回调执行结束才会去解析模板，这时input框才会出现）

      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
      console.log(todo);
    },
    // 失去焦点时存值
    handleBlur(todo, e) {
      todo.isEdit = false;
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}


</style>