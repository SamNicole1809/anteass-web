const valid = {
  reg: {
    phone: /^[1]([3-9])[0-9]{9}$/,
    password: /^[\w!@#$%^&*]{6,16}$/,
    organName: /^[\u4E00-\u9FA5\da-zA-Z_&]{2,16}$/
  },
  msg: {
    input: '请输入',
    select: '请选择',
    phone: '手机号格式有误',
    password: '请输入6-16位密码，支持数字和字母',
    organName: '请输入2-16位机构名，支持中文、数字和字母'
  },
  isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
  },
  checkNull(rule, value, callback, message, flag = true) {
    if (isNullOrEmpty(value)) {
      callback(new Error(message))
    }
    if (flag) {
      callback()
    }
  },
  checkMinZero(rule, value, callback, message, flag = true) {
    if (value <= 0) {
      callback(new Error(message))
    }
    if (flag) {
      callback()
    }
  },
  checkNumNull(rule, value, callback, message, flag = true) {
    if (isNumNull(value)) {
      callback(new Error(message))
    }
    if (flag) {
      callback()
    }
  },
  checkTimeSelect(rule, value, callback, message, flag = true) {
    if (!value) {
      callback(new Error(message))
    }
    if (flag) {
      callback()
    }
  },
  checkSelect(rule, value, callback, message, flag = true) {
    if (isNullOrEmpty(value)) {
      callback(new Error(message))
    }
    if (flag) {
      callback()
    }
  },
  checkMultiSelect(rule, value, callback, message, flag = true) {
    if (isEmpty(value)) {
      callback(new Error(message))
    }
    if (flag) {
      callback()
    }
  },
  checkByRegex(rule, value, callback, regex, message, flag = true) {
    if (!value) {
      callback()
    }
    if (!regex.test(value)) {
      callback(new Error(message))
    }
    if (flag) {
      callback()
    }
  },
  isNullOrEmpty(value) {
    if (!value) {
      return true
    }
    return value.trim() === ''
  }
}

function isEmpty(value) {
  return value.length === 0
}

function isNullOrEmpty(value) {
  if (!value) {
    return true
  }
  return value.toString().trim() === ''
}

function isNumNull(value) {
  return !value && value !== 0
}

export default valid
