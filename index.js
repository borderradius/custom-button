import AshButton from './components/AshButton.vue';

const install = (Vue) => {
  Vue.component(AshButton.name, AshButton)
}

// auto install if used in browser
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 컴포넌트로 불러와서 사용가능
export {
  AshButton
}

// Vue.use로 사용가능
export default install


