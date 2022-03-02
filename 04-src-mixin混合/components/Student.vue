<template>
  <div>
    <h2 @click="showName">学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template> 

<script>
import {mixin,dataMixin} from '../mixin'

export default {
  name: 'CpSchool',
  data() {
    return {
      name: 'bbgc',
      address: '北京'
    }
  },
  mixins:[mixin,dataMixin]
}
</script>

