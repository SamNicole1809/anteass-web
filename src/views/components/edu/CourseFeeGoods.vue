<template>
  <div>
    <el-row class="anteass-el-row" type="flex" align="middle">
      <!--搜索物品-->
      <el-col :span="8">
        <el-row type="flex" align="middle">
          <el-col :span="4">搜索物品:</el-col>
          <el-col :span="15">
            <el-input v-model="entity.goods" placeholder="请输入" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" />
            </el-input>
          </el-col>
        </el-row>
      </el-col>
      <!--库存情况-->
      <el-col :span="8">
        <el-row type="flex" align="middle" justify="center">
          <el-col :span="4">库存情况:</el-col>
          <el-col :span="15">
            <el-checkbox v-model="entity.stockState">
              <el-badge style="padding-right: 10px" :value="entity.stockNumber" class="item">库存不足</el-badge>
            </el-checkbox>
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
        <el-button size="small">新建物品</el-button>
      </div>
    </el-row>
    <!--表格区-->
    <el-row class="anteass-6-padding-top">
      <el-table
        ref="multipleTable"
        :header-cell-style="{background:'#E4E7ED',color:'#606266'}"
        stripe
        :data="tableData"
        style="width: 100%"
        max-height="500"
      >
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
        <el-table-column fixed="right" align="center" label="操作" width="230">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click.native.prevent="addStockBtn(scope.row)">增加库存</el-button>
            <el-button type="text" size="small" @click.native.prevent="stockChangeRecordBtn(scope.row)">库存变更记录
            </el-button>
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
  name: 'CourseFeeGoods',
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
        goods: '',
        stockState: false,
        stockNumber: 50,
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
    addStockBtn(row) {

    },
    stockChangeRecordBtn(row) {

    },
    stateChangeBtn(row) {

    },
    editBtn(row) {

    },
    deleteBtn(row) {

    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  }
}
</script>
