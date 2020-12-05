import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/organ',
    component: () => import('@/views/login/organ'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'index' }
    }]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/edu',
    component: Layout,
    redirect: '/edu/course',
    name: 'Education',
    meta: { title: '教务管理', icon: 'form', rules: [] },
    children: [
      {
        path: 'course',
        name: 'EduCourse',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '课表管理', icon: 'form', rules: [] }
      },
      {
        path: 'class',
        name: 'EduClass',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '班级管理', icon: 'form', rules: [] }
      },
      {
        path: 'teacher',
        name: 'EduTeacher',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '教师管理', icon: 'form', rules: [] }
      },
      {
        path: 'cost',
        name: 'EduCost',
        redirect: '/edu/cost/course',
        component: () => import('@/views/edu/CourseFee'),
        meta: { title: '课程收费', icon: 'form', rules: [] },
        children: [
          {
            path: 'course',
            name: 'EduCostCourse',
            component: () => import('@/views/components/edu/CourseFeeCourse'),
            meta: { title: '', icon: 'form', rules: [] },
            hidden: true
          },
          {
            path: 'goods',
            name: 'EduCostGood',
            component: () => import('@/views/components/edu/CourseFeeGoods'),
            meta: { title: '', icon: 'form', rules: [] },
            hidden: true
          },
          {
            path: 'cost',
            name: 'EduCostCost',
            component: () => import('@/views/components/edu/CourseFeeCost'),
            meta: { title: '', icon: 'form', rules: [] },
            hidden: true
          },
          {
            path: 'combo',
            name: 'EduCostCombo',
            component: () => import('@/views/components/edu/CourseFeeCombo'),
            meta: { title: '', icon: 'form', rules: [] },
            hidden: true
          }
        ]
      },
      {
        path: 'record',
        name: 'EduRecord',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '上课记录', icon: 'form', rules: [] }
      },
      {
        path: 'family',
        name: 'EduFamily',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '家校互动', icon: 'form', rules: [] }
      }
    ]
  },
  {
    path: '/sale',
    component: Layout,
    redirect: '/sale/student',
    name: 'Sale',
    meta: { title: '销售管理', icon: 'form', rules: [] },
    children: [
      {
        path: 'student',
        name: 'SaleStudent',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '学员档案', icon: 'form', rules: [] }
      },
      {
        path: 'renew',
        name: 'SaleRenew',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '续费预警', icon: 'form', rules: [] }
      },
      {
        path: 'audition',
        name: 'SaleAudition',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '试听记录', icon: 'form', rules: [] }
      },
      {
        path: 'document',
        name: 'SaleDocument',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '成长档案', icon: 'form', rules: [] }
      }
    ]
  },
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/join',
    name: 'Finance',
    meta: { title: '财务管理', icon: 'form', rules: [] },
    children: [
      {
        path: 'join',
        name: 'FinanceJoin',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '报名续费', icon: 'form', rules: [] }
      },
      {
        path: 'receipt',
        name: 'FinanceReceipt',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '收据清单', icon: 'form', rules: [] }
      },
      {
        path: 'arrears',
        name: 'FinanceArrears',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '欠费收据', icon: 'form', rules: [] }
      },
      {
        path: 'quit',
        name: 'FinanceQuit',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '退转记录', icon: 'form', rules: [] }
      },
      {
        path: 'salary',
        name: 'FinanceSalary',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '工资结算', icon: 'form', rules: [] }
      },
      {
        path: 'expend',
        name: 'FinanceExpend',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '费用支出', icon: 'form', rules: [] }
      }
    ]
  },
  {
    path: '/data',
    component: Layout,
    redirect: '/data/education',
    name: 'Data',
    meta: { title: '数据管理', icon: 'form', rules: [] },
    children: [
      {
        path: 'education',
        name: 'DataEducation',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '教务数据', icon: 'form', rules: [] }
      },
      {
        path: 'sale',
        name: 'DataSale',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '销售数据', icon: 'form', rules: [] }
      },
      {
        path: 'finance',
        name: 'DataFinance',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '财务数据', icon: 'form', rules: [] }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/account',
    name: 'Setting',
    meta: { title: '机构设置', icon: 'form', rules: [] },
    children: [
      {
        path: 'account',
        name: 'SettingAccount',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '账户管理', icon: 'form', rules: [] }
      },
      {
        path: 'rule',
        name: 'SettingRule',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '规则设置', icon: 'form', rules: [] }
      },
      {
        path: 'show',
        name: 'SettingShow',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '机构展示', icon: 'form', rules: [] }
      },
      {
        path: 'log',
        name: 'SettingLog',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '操作日志', icon: 'form', rules: [] }
      },
      {
        path: 'combo',
        name: 'SettingCombo',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '服务订购', icon: 'form', rules: [] }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
