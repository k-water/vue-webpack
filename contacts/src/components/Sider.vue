<template>
  <div id="sider">
    <el-col :span="7" class="sider-left">
      <el-menu router>
        <el-menu-item index="1" :route="{path: '/all'}">
          <i class="el-icon-message"></i>导航一
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>导航二
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>导航三
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view name="path"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'sider',
    data() {
      return {
        items: [{
          title: '联系人'
        }, {
          title: 'Water'
        }, {
          title: 'Chellhoo'
        }]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss">
  .sider-left {
    padding: 40px;
    .el-menu {
      background: whitesmoke;
      color: black;
    }
  }
</style>