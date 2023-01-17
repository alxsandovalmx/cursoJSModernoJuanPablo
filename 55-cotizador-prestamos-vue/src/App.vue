<!-- Logica del componente  -->
<script setup>
  // Import para el State
  import { ref, computed, watch } from 'vue'
  // Import del Componente
  import Header from './components/Header.vue'
  import Button from './components/Button.vue'
  import { calcularTotalPagar } from './helpers'

  // Use de ref que recibe primitivos
  const cantidad = ref(10000);
  const meses = ref(6);
  const total = ref(0);

  // En el state solo se crean valores que pueden modificarse
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // El acceso al valor en ref cono .value
  // console.log( cantidad.value );

  // Uso de computed porque se mostrara en pantalla
  // No pueden recibir un valor
  const formatearDinero = ( valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format( valor );
  };

  // Uso de Watch - es como un use effect en react
  watch( [cantidad, meses], () =>{
    total.value = calcularTotalPagar( cantidad.value, meses.value );
  });

  // Use de Computed Property
  const pagoMensual = computed( () => {
    return total.value / meses.value;
  });

  // No se usa computed porque no se representara en el Template, solo cambiara el State
  const handlerChangeDecremento = () => {
    const valor = cantidad.value - STEP;
    if( valor < MIN ) {
      alert('¡Cantidad no valida!');
      return;
    }

    cantidad.value = valor;

    // console.log( text );
  
  };

  // Funcion para incrementar
  const handlerChangeIncremento = () => {
    const valor = cantidad.value + STEP;

    if( valor > MAX ){
      alert('¡Cantidad no valida!');
      return;
    }

    cantidad.value = valor;

    // console.log( text );

  };

</script>

<!-- HTML del componente  -->
<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
    <Header/>

    <div class="flex justify-between mt-10">
      <Button
        :operador="'-'"
        @fn="handlerChangeDecremento"
      />
      <Button
        :operador="'+'"
        @fn="handlerChangeIncremento"
      /> 

    </div>

    <div class="my-5"> 
      <input
        type="range"
        class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600"
        :min="MIN"
        :max="MAX"
        :step="STEP"
        v-model.number="cantidad"
      />

      <p class="text-center my-10 text-5xl font-extrabold text-indigo-600"> {{ formatearDinero(cantidad) }}</p>

      <h2 class="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span class="text-indigo-600">Plazo</span> a pagar
      </h2>
      <select name="" id=""
        class="w-full p-2 gb-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500 mt-5"
        :value="meses"
        v-model.number="meses"
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>
    </div>

    <div v-if="total > 0" class="my-5 space-y-3 bg-gray-50 p-5">
      <h2 class="text-2xl font-extrabold text-gray-500 text-center ">
        Resumen <span class="text-indigo-600">de pagos</span>
      </h2>
      <p class="text-xl text-gray-500 text-center font-bold">{{ meses }} Meses</p>
      <p class="text-xl text-gray-500 text-center font-bold">Total a pagar: {{ formatearDinero(total) }} </p>
      <p class="text-xl text-gray-500 text-center font-bold">Mensuales: {{ formatearDinero( pagoMensual ) }} </p>
    </div>
    <p v-else class="text-center">Añade una cantidad y un plazo a pagar</p>

  </div>
</template>

<!-- CSS del componente  -->
<style scoped>

</style>
