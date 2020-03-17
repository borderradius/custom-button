import MyBtn from './components/MyBtn.vue';

const install = (Vue) => {
  Vue.component(MyBtn.name, MyBtn)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 컴포넌트로 불러와서 사용가능
export {
  MyBtn
}

// Vue.use로 사용가능
export default install


