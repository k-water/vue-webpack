<template>
  <div id="sider">
    <el-col :span="7" class="sider-left">
      <el-menu router default-active="1">
        <el-menu-item index="1" :route="{path: '/'}">
          <i class="el-icon-message"></i>Contacts
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>群组
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>更多 
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
  export default {
    name: 'sider',
    data() {
      return {}
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