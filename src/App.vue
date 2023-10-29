<template>
  <div>
    <h1 class="title">hello Vue-cli vue2</h1>
    <el-button>btn</el-button>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './views/Home'
import { ElButton } from 'element-plus'
export default {
  name: 'app',
  components: {
    // Home,
    ElButton
  }
}
</script>

<style>
.title{
  font-size: 36px;
  color: aqua;
}
</style>