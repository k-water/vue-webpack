<template>
  <div id="dialog">
    <el-col :span="5" style="background: #e5e9f2">
      <div class="grid-content bg-purple-light" style="float: right">
        <el-button type="primary" @click="openDialog" icon="edit">Add</el-button>
      </div>
    </el-col>

    <el-dialog title="添加联系人" v-model="dialogVisible" size="small">
      <el-form :model="form" :rules="rules" ref="from" :label-position="labelPosition" label-width="120px">
        <el-form-item label="姓名" required>
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="form.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phoneNumber">
          <el-input v-model.number="form.phoneNumber" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="家庭电话" prop="homeNumber" required>
          <el-input v-model.number="form.homeNumber" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="生日" prop="birthday" required>
           <el-date-picker type="date" placeholder="选择日期" style="width: 70%;" v-model="form.birthday"></el-date-picker>
        </el-form-item>
        <el-form-item label="个人主页" prop="site">
          <el-input v-model="form.site" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address" required>
          <el-input type="textarea" v-model="form.address" style="width: 70%;" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        dialogFormVisible: false,
        labelPosition: 'left',
        form: {
          name: '',
          email: '',
          phoneNumber: '',
          homeNumber: '',
          birthday: '',
          address: '',
          site: ''
        },
        props:['dialogVisible'],
        rules: {
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur'},
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur, change'}
          ],
          phoneNumber: [
            { required: true, message: '请填写手机号码', trigger: 'blur' },
            { type: 'number', message: '请输入11位手机号码', trigger: 'blur, change' }
          ],
          site: [
            { required: true, message: '请输入一个网址', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      openDialog() {
        this.dialogVisible = true
        this.$emit('onpenDialog')
      },
      sureDialog() {
        console.log(this.form.name)
      }
    }
  }
</script>