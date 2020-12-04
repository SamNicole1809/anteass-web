<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header>
        Anteass
      </el-header>
      <el-container style="height: 100%">
        <el-card style="position: absolute; right: 10%; top: 30%">
          <div slot="header" class="clearfix">
            <span>用户登录</span>
          </div>
          <div v-if="type.login === 'password'">
            <el-form ref="loginForm" :model="entity.login" :rules="rules.login">
              <el-form-item prop="phone">
                <div>
                  <el-input v-model="entity.login.phone" placeholder="请输入手机号">
                    <template slot="append">
                      <div style="width: 40px">手机号</div>
                    </template>
                  </el-input>
                </div>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="entity.login.password" placeholder="请输入密码" show-password @keyup.enter.native="handleLogin">
                  <template slot="append">
                    <div style="width: 40px; text-align: center">密码</div>
                  </template>
                </el-input>
              </el-form-item>
              <el-button :loading="loading.loginBtn" type="primary" style="width:100%;" @click.native.prevent="handleLogin">登录</el-button>
            </el-form>
          </div>
          <div v-if="type.login === 'code'">
            <el-form ref="loginForm" :model="entity.login" :rules="rules.login">
              <el-form-item prop="phone">
                <div>
                  <el-input v-model="entity.login.phone" placeholder="请输入手机号">
                    <template slot="append">
                      <div style="width: 40px">手机号</div>
                    </template>
                  </el-input>
                </div>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="entity.login.password" placeholder="请输入验证码" show-password @keyup.enter.native="handleLogin">
                  <template slot="append">
                    <div style="width: 40px; text-align: center">验证码</div>
                  </template>
                </el-input>
              </el-form-item>
              <el-button :loading="loading.loginBtn" type="primary" style="width:100%;" @click.native.prevent="handleLogin">登录</el-button>
            </el-form>
          </div>
          <div style="margin-top: 10px; text-align: right">
            <el-button v-if="type.login === 'code'" type="text" @click="type.login = 'password'">密码登录</el-button>
            <el-button v-if="type.login === 'password'" type="text" @click="type.login = 'code'">验证码登录</el-button>
          </div>
        </el-card>
      </el-container>
      <el-footer>
        Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import valid from '../../utils/validator'

export default {
  name: 'Login',
  data() {
    return {
      entity: {
        login: {
          phone: undefined,
          password: undefined
        }
      },
      loading: {
        loginBtn: false
      },
      type: {
        login: 'password'
      },
      rules: {
        login: {
          phone: [
            {
              required: true, trigger: 'blur',
              validator: (rule, value, callback) => {
                valid.checkNull(rule, value, callback, valid.msg.input, false)
                valid.checkByRegex(rule, value, callback, valid.reg.phone, valid.msg.phone)
              }
            }
          ],
          password: [
            {
              required: true, trigger: 'blur',
              validator: (rule, value, callback) => {
                valid.checkNull(rule, value, callback, valid.msg.input, false)
                valid.checkByRegex(rule, value, callback, valid.reg.password, valid.msg.password)
              }
            }
          ]
        }
      },
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading.loginBtn = true
          this.$store.dispatch('user/login', this.entity.login).then(res => {
            this.$router.push({ path: '/organ' })
            this.loading.loginBtn = false
          }).catch(() => {
            this.loading.loginBtn = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
