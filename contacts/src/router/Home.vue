<template>
  <div id="home">
    <!--添加按钮 点击触发dialog-->
    <el-col :span="5" style="background: #e5e9f2" class="pos">
      <div class="grid-content bg-purple-light" style="float: right">
        <el-button type="primary" @click="openDialog" icon="edit">Add</el-button>
      </div>
    </el-col>

    <!--Table展示数据-->
    <el-col :span="17">
      <el-table :data="contacts">
        <el-table-column type="expand">
          <template scope="props">
            <p>省: {{ props.row.province }}</p>
            <p>市: {{ props.row.city }}</p>
            <p>住址: {{ props.row.detailAddress }}</p>
            <p>邮编: {{ props.row.zip }}</p>
          </template>
        </el-table-column>
        <el-table-column label="姓名" prop="name">
        </el-table-column>
        <el-table-column label="邮箱" prop="email">
        </el-table-column>
        <el-table-column label="电话" prop="phoneNumber">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>

    <!--dialog模拟框添加数据-->
    <el-dialog title="添加联系人" v-model="dialogVisible" size="small">
      <el-form :model="form" ref="from" :label-position="labelPosition" label-width="120px">
        <el-form-item label="姓名" required>
          <el-input v-model="form.name" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="form.email" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phoneNumber">
          <el-input v-model="form.phoneNumber" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="家庭电话" prop="homeNumber" required>
          <el-input v-model.number="form.homeNumber" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="生日" prop="birthday" required>
          <el-input type="date" placeholder="选择日期" style="width: 70%;" v-model="form.birthday">
          </el-input>
        </el-form-item>
        <el-form-item label="个人主页" prop="site">
          <el-input v-model="form.site" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address" required>
          <el-input type="textarea" v-model="form.address" style="width: 70%;" auto-complete="off">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false" v-if="sure">
          取 消
        </el-button>
        <el-button @click="dialogVisible=false" type="info" v-else>
          取 消
        </el-button>
        <el-button type="primary" @click="addContacts" v-if="sure">
          确 定
        </el-button>
        <el-button type="warning" @click="dialogVisible=false" v-else>
          修 改
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        contacts: [],
        dialogVisible: false,
        dialogFormVisible: false,
        labelPosition: 'left',
        sure: 'true',
        currentForm: {},
        changeForm: {},
        form: {
          name: 'water',
          email: '',
          phoneNumber: '',
          homeNumber: '',
          birthday: '',
          address: '',
          site: ''
        },
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.init()
      })
    },
    methods: {
      // 数据加载初始化
      init() {
        this.$http.get('../../static/data/info.json').then((res) => {
          this.contacts = res.body
        },error => {
          console.log(error)
        })
      },

      // 点击Add打开Dialog 并清空上一次的数据
      openDialog() {
        this.dialogVisible = true
        this.sure = true
        for (let value in this.form) {
          this.form[value] = ''
        }
      },

      //添加新的数据
      addContacts() {
        this.dialogVisible = false
        this.currentForm = this.form
        this.currentForm = Object.assign({}, this.currentForm)
        this.$nextTick(() => {
          this.contacts.push(this.currentForm)
        })
      },

      // 删除一行数据
      handleDelete(index, row) {
        if(confirm('您确定删除此联系人吗？')) {
          this.contacts.splice(index, 1);
        }
      },

      //编辑一行数据
      handleEdit(index, row) {
        this.sure = false
        this.dialogVisible = true        
        this.form = row
        this.changeForm = row
      },

      // 修改一行数据
      changeContact() {
        this.dialogVisible = false
        this.form = this.changeForm
      }
    }
  }
</script>
<style lang="scss">
  #home {
    padding: 30px 30px 0 20px;
  }
  .pos {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>