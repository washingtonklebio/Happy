import Vue from 'vue'

const components = {
  AtomExtraIncomeBar: () => import('../../components/atom/ExtraIncomeBar.vue' /* webpackChunkName: "components/atom-extra-income-bar" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
