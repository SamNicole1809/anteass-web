<template>
  <div style="width: 100%; height: 100%; display: flex; align-items: center">
    <el-container style="display:flex; flex-direction: column; justify-content: center;">
      <div style="text-align: center">
        <h3>选择机构</h3>
      </div>
      <div style="display: flex; justify-content: center">
        <el-card v-for="organ in organs" :key="organ.value" style="width: 200px; margin: 5px">
          <h5>{{ organ.label }}</h5>
          <div style="text-align: right">
            <el-button type="text" @click="confirmBtn(organ.value)">确定</el-button>
          </div>
        </el-card>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Organ',
  data() {
    return {

    }
  },
  computed: {
    organs() {
      return this.$store.state.user.organs
    }
  },
  mounted() {
    if (this.organs.length === 0) {
      this.$router.push({ path: '/login' })
    }
  },
  methods: {
    confirmBtn(organId) {
      const userInfo = {
        token: this.$store.state.user.token,
        organId: organId
      }
      this.$store.dispatch('user/getAuth', userInfo).then(res => {
        this.$router.push({ path: '/' })
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>

</style>
