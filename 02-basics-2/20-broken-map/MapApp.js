import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    const x = ref(0)
    const y = ref(0)
    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      console.log("click", event)
      x.value = event.offsetX
      y.value = event.offsetY
    }

    // Следим за X и Y для установки нового положения
    watch([x, y], () => {
      // Находим метку и изменяем её положение
      const map = document.querySelector('.pin')
      map.style.left = `${x.value}px`
      map.style.top = `${y.value}px`
    })

    return {
      handleClick, x, y
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="{ left: x + 'px', top: y + 'px', position: 'absolute' }">📍</span>
    </div>
  `,
})
