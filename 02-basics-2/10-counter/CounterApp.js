import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {

    const state = ref(0);

    const isDisableIncrement = computed(() => {
      return state.value === 5;
    })

    const isDisableDecrement = computed(() => {
      return state.value === 0;
    })

    const clickDecrement = () => {
      if (!isDisableDecrement.value) {
        state.value--;
      }
    }

    const clickIncrement = () => {
      if (!isDisableIncrement.value) {
        state.value++;
      }
    }

    return {clickDecrement, state, clickIncrement, isDisableDecrement, isDisableIncrement}
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="isDisableDecrement"
        @click="clickDecrement"
      >➖</button>
      <span class="count" data-testid="count">{{ state }}</span>
      <span class="count" data-testid="count">0</span>
      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="isDisableIncrement"
        @click="clickIncrement"
      >➕</button>
    </div>
  `,
})
