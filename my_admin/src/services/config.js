import axios from 'axios'

const mock = false //是否使用模拟数据

const serverUrl = 'http://localhost:3000/api/'

const mockUrl = '/static/mock'

const basUrl = mock ? mockUrl : serverUrl

axios.defaults.baseURL = basUrl

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'