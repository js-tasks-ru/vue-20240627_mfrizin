import { defineComponent, ref, watch} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const num1 = ref(0);
    const num2 = ref(0);
    const result = ref(0);
    const operator = ref(null);

    const operations =  {
      sum: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
    }


    watch([num1, num2, operator], ([n1, n2, op]) => {
      if (op && operations[op]){
        result.value = operations[op](n1, n2);
      }
    });

    return { num1, num2, result, operator }
  },

  template: `
    <div class="calculator">
      <input v-model="num1" type="number" aria-label="First operand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" v-model="operator" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model="operator" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model="operator" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model="operator" value="divide"/>➗</label>
      </div>

      <input v-model="num2" type="number" aria-label="Second operand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
