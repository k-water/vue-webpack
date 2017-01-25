<template>
  <div id="home">
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
        <el-table-column label="生日" prop="birthday">
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
    <Add ref="add" @add="addContacts"></Add>
  </div>
</template>
<script>
  import Add from '../components/Add.vue'
  export default {
    data() {
      return {
        contacts: [ {
          birthday: '2017-1-23',
          name: '林梓标',
          province: '广东',
          city: '广州市',
          address: '广东省广州市天河区华南农业大学',
          detailAddress: '天河区华南农业大学',
          phoneNumber: '13602803974',
          email: '625592890@qq.com',
          zip: 510642
        }, {
          birthday: '2017-1-22',
          name: 'water',
          province: '广东',
          city: '广州市',
          address: '广东省广州市天河区华南农业大学',
          detailAddress: '天河区华南农业大学',
          phoneNumber: '13602803974',
          email: '625592890@qq.com',
          zip: 510642
        }, {
          birthday: '2017-1-24',
          name: 'coding',
          province: '广东',
          city: '广州市',
          address: '广东省广州市天河区华南农业大学',
          detailAddress: '天河区华南农业大学',
          phoneNumber: '13602803974',
          email: '625592890@qq.com',
          zip: 510642
        }, {
          birthday: '2017-1-21',
          name: 'boy',
          province: '广东',
          city: '广州市',
          address: '广东省广州市天河区华南农业大学',
          detailAddress: '天河区华南农业大学',
          phoneNumber: '13602803974',
          email: '625592890@qq.com',
          zip: 510642
        }]
      }
    },
    components: {
      Add
    },
    methods: {
      addContacts() {
        let tmpData = this.$refs.add.form
        tmpData = Object.assign({}, tmpData)
        this.$nextTick(() => {
          this.contacts.push(tmpData)
        })
      },
      handleDelete(index, row) {
        this.contacts.splice(index, 1);
      },
      handleEdit(index, row) {
        let child = this.$refs.add
        child.editDialog()
        child.setFormData(row)
      }
    }
  }
</script>
<style lang="scss">
  #home {
    padding: 30px 30px 0 20px;
  }
</style>