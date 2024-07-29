import {createApp, defineComponent} from 'vue/dist/vue.esm-bundler.js'

const App = defineComponent({
  name: 'App',

  setup(){
    const date = new Date();

    const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })

    const formattedDate = formatter.format(date);

    return { formattedDate };
  },

  template: `<div>Сегодня {{ formattedDate }}</div>`,
})
createApp(App).mount('#app')
