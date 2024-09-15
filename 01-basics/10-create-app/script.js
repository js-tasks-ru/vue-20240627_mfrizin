import {createApp, defineComponent} from 'vue/dist/vue.esm-bundler.js'

const App = defineComponent({
  name: 'App',

  setup(){

    const formatter = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'long' })

    const formattedDate = formatter.format(new Date());

    return { formattedDate };
  },

  template: `<div>Сегодня {{ formattedDate }}</div>`,
})
createApp(App).mount('#app')
