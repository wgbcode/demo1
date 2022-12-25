<template>
  <div id="app">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in itemList"
                          :to="{ path:item.path }"
                          :key="index">{{ item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view />
  </div>
</template>

<script>
export default {
  // 如果将数据存放到data中，后退时itemList不会更新，面包屑组件也不会重新渲染。
  computed: {
    itemList() {
      return this.$route.matched
    }
  }
}
</script>
