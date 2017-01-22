<template>
  <div id="first">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <img :src=img alt="">
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-input placeholder="请输入你要寻找的内容..." v-model="msg">
            <el-button slot="append" class="btn" icon="search" @click="handleClick"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <img :src=img alt="" style="float: right;">
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'first',
    data() {
      return {
        img: require('../assets/logo.png'),
        msg: ''
      }
    },
    methods: {
      handleClick() {
        alert("您输入的内容是" + this.msg)
        this.msg = ''
      }
    }
  }
</script>
<style lang="scss">
  @import url("//unpkg.com/element-ui/lib/theme-default/index.css");
  img {
    max-width: 100%;
  }
  
  .btn {
    background: cornflowerblue !important;
    color: white !important;
    border-radius: 0px;
    &:hover {
      background: #79a4f2 !important;
    }
  }
  
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .el-col {
    border-radius: 4px;
  }
  
  .bg-purple-dark {
    background: #99a9bf;
  }
  
  .bg-purple {
    background: #d3dce6;
  }
  
  .bg-purple-light {
    background: #e5e9f2;
  }
  
  .grid-content {
    /*border-radius: 4px;*/
    min-height: 36px;
    height: 36px;
    padding: 12px 20px;
    img {
      height: 36px;
    }
  }
  
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  
  .el-input {
    width: 70%;
  }
</style>