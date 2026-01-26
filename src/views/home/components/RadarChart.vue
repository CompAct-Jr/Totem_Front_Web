<template>
  <div class="chart_box">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { computed } from 'vue'
import { ResponseService } from '@/services/ResponseService'

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const canvasRef = ref<HTMLCanvasElement | null>(null)
const scores = computed(() => ResponseService.getResponseCalculed())

onMounted(() => {
  if (!canvasRef.value) return

  new Chart(canvasRef.value, {
    type: 'radar',
    data: {
      labels: ['I', 'A', 'S', 'R', 'E', 'C'],
      datasets: [
        {
          label: 'Perfil Vocacional',
          data: [
            scores.value.INVESTIGATIVO,
            scores.value.ARTÍSTICO,
            scores.value.SOCIAL,
            scores.value.REALISTA,
            scores.value.EMPREENDEDOR,
            scores.value.CONVENCIONAL,
          ],
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          borderColor: 'rgba(99, 102, 241, 1)',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true
        }
      }
    }
  })
})
</script>

<style lang="scss">
    .chart_box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
</style>
