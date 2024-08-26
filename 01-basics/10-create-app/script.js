import {createApp, defineComponent} from 'vue'

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
