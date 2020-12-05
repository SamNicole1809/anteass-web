<template>
  <el-main>
    <el-tabs v-model="entity.tab" type="card" @tab-click="handleTabClick">
      <el-tab-pane label="课程" name="course">
        <course-fee-course />
      </el-tab-pane>
      <el-tab-pane label="物品" name="goods">
        <course-fee-goods />
      </el-tab-pane>
      <el-tab-pane label="费用" name="cost">
        <course-fee-cost />
      </el-tab-pane>
      <el-tab-pane label="套餐" name="combo">
        <course-fee-combo />
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>

<script>
import tool from '../../utils/tools'

export default {
  components: {
    CourseFeeCourse: () => import('../components/edu/CourseFeeCourse'),
    CourseFeeCombo: () => import('../components/edu/CourseFeeCombo'),
    CourseFeeCost: () => import('../components/edu/CourseFeeCost'),
    CourseFeeGoods: () => import('../components/edu/CourseFeeGoods')
  },
  data() {
    return {
      entity: {
        tab: 'course'
      }
    }
  },
  mounted() {
    this.initTab()
  },
  methods: {
    initTab() {
      this.entity.tab = tool.getPathLast(this.$route.path)
    },
    handleTabClick(tab) {
      this.$router.push('/edu/cost/' + tab.name)
    }
  }
}
</script>
