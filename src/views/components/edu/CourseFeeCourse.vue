<template>
  <div>
    <el-row class="anteass-el-row" type="flex" align="middle">
      <!--搜索课程-->
      <el-col :span="8">
        <el-row type="flex" align="middle">
          <el-col :span="4">搜索课程:</el-col>
          <el-col :span="15">
            <el-input v-model="entity.course" placeholder="请输入课程名称" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" />
            </el-input>
          </el-col>
        </el-row>
      </el-col>
      <!--商品名称-->
      <el-col :span="8">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="4">商品名称:</el-col>
          <el-col :span="15">
            <el-select v-model="entity.goods" style="width: 100%" value="" placeholder="请选择">
              <el-option
                v-for="item in options.goods"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <!--课程类型-->
      <el-col :span="8">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="4">课程类型:</el-col>
          <el-col :span="15">
            <el-select v-model="entity.courseType" style="width: 100%" value="" placeholder="请选择">
              <el-option
                v-for="item in options.courseTypes"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="anteass-el-row" type="flex" align="middle">
      <!--课程状态-->
      <el-col :span="8">
        <el-row type="flex" justify="start" align="middle">
          <el-col :span="4">课程状态:</el-col>
          <el-col :span="15">
            <el-select v-model="entity.courseState" style="width: 100%" value="" placeholder="请选择">
              <el-option
                v-for="item in options.courseStates"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <!--线上售卖-->
      <el-col :span="8">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="4">线上售卖:</el-col>
          <el-col :span="15">
            <el-select v-model="entity.saleOnline" style="width: 100%" value="" placeholder="请选择">
              <el-option
                v-for="item in options.saleOnlineStates"
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
        <el-button size="small">新建课程</el-button>
      </div>
      <div class="anteass-10-padding-left">
        <el-button size="small">在线商城二维码</el-button>
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
        <el-table-column fixed="right" align="center" label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click.native.prevent="saleOnlineBtn(scope.row)">线上售卖</el-button>
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
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      page: {
        page: 1,
        count: 10,
        total: 100
      },
      entity: {
        course: '',
        goods: '',
        courseType: '',
        courseState: '',
        saleOnline: ''
      },
      options: {
        goods: [
          { id: '1', name: '书法' },
          { id: '2', name: '绘画' }
        ],
        courseTypes: [
          { id: '1', name: '一对一' },
          { id: '2', name: '一对多' }
        ],
        courseStates: [
          { id: '1', name: '启用' },
          { id: '2', name: '停用' }
        ],
        saleOnlineStates: [
          { id: '1', name: '已开启' },
          { id: '2', name: '未开启' }
        ]
      }
    }
  },
  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    saleOnlineBtn() {

    },
    editBtn() {

    },
    deleteBtn() {

    }
  }
}
</script>
