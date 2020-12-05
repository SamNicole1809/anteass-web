<template>
  <div>
    <el-row class="anteass-el-row" type="flex" align="middle">
      <!--搜索费用-->
      <el-col :span="8">
        <el-row type="flex" align="middle">
          <el-col :span="4">搜索费用:</el-col>
          <el-col :span="15">
            <el-input v-model="entity.feeName" placeholder="请输入费用名称" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" />
            </el-input>
          </el-col>
        </el-row>
      </el-col>
      <!--启用状态-->
      <el-col :span="8">
        <el-row type="flex" align="middle" justify="center">
          <el-col :span="4">启用状态:</el-col>
          <el-col :span="15">
            <el-select v-model="entity.active" style="width: 100%" value="" placeholder="请选择">
              <el-option
                v-for="item in options.activeStates"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--按钮区-->
    <el-row class="anteass-el-row" type="flex" align="middle">
      <div>
        <el-button size="small">新建费用</el-button>
      </div>
    </el-row>
    <!--表格区-->
    <el-row class="anteass-6-padding-top">
      <el-table ref="multipleTable" :header-cell-style="{background:'#E4E7ED',color:'#606266'}" stripe :data="tableData" style="width: 100%" max-height="500">
        <el-table-column sortable prop="date" label="日期" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="province" label="省份" />
        <el-table-column prop="city" label="市区" />
        <el-table-column prop="address" label="地址" />
        <el-table-column prop="zip" label="邮编" />
        <el-table-column prop="zip" label="邮编" />
        <el-table-column prop="zip" label="邮编" />
        <el-table-column prop="zip" label="邮编" />
        <el-table-column fixed="right" align="center" label="启用状态" width="80">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" @change="stateChangeBtn(scope.row)" />
          </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click.native.prevent="editBtn(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click.native.prevent="deleteBtn(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!--分页-->
    <el-row class="anteass-6-padding-top" type="flex" justify="end">
      <div class="block">
        <el-pagination
          :current-page="page.page"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="page.count"
          layout="total, sizes, prev, pager, next, jumper"
          :total="page.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CourseFeeCost',
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        state: false
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        state: true
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        state: false
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        state: true
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        state: false
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        state: false
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        state: true
      }],
      page: {
        page: 1,
        count: 10,
        total: 100
      },
      entity: {
        feeName: '',
        active: ''
      },
      options: {
        activeStates: [
          { id: '1', name: '启用' },
          { id: '2', name: '停用' }
        ]
      }
    }
  },
  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    stateChangeBtn(row) {

    },
    editBtn(row) {

    },
    deleteBtn(row) {

    }
  }
}
</script>
