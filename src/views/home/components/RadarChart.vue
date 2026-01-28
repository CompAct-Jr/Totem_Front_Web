<template>
  <div class="chart_box">
    <div class="chart_legends">
      <span class="legend investigativo">I (Investigativo)</span>
      <span class="legend artistico">A (Artístico)</span>
      <span class="legend social">S (Social)</span>
      <span class="legend realista">R (Realista)</span>
      <span class="legend empreendedor">E (Empreendedor)</span>
      <span class="legend convencional">C (Convencional)</span>
    </div>

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

const COLORS = {
  INVESTIGATIVO: '#6366f1',
  ARTÍSTICO: '#ec4899',
  SOCIAL: '#22c55e',
  REALISTA: '#f97316',
  EMPREENDEDOR: '#eab308',
  CONVENCIONAL: '#0ea5e9'
}


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

          pointBackgroundColor: [
            COLORS.INVESTIGATIVO,
            COLORS.ARTÍSTICO,
            COLORS.SOCIAL,
            COLORS.REALISTA,
            COLORS.EMPREENDEDOR,
            COLORS.CONVENCIONAL,
          ],

          pointBorderColor: '#fff',
          pointRadius: 5,
          pointHoverRadius: 7
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
.chart_box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.chart_legends {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.8rem;

  .legend {
    display: flex;
    align-items: center;
    gap: 8px;

    opacity: 0;
    transform: translateX(-10px);
    animation: legendFade 0.5s ease forwards;

    &::before {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 3px;
      display: inline-block;
    }
  }

  .legend:nth-child(1) {
    animation-delay: 0.3s;
  }

  .legend:nth-child(2) {
    animation-delay: 0.45s;
  }

  .legend:nth-child(3) {
    animation-delay: 0.6s;
  }

  .legend:nth-child(4) {
    animation-delay: 0.75s;
  }

  .legend:nth-child(5) {
    animation-delay: 0.9s;
  }

  .legend:nth-child(6) {
    animation-delay: 1.05s;
  }

  @keyframes legendFade {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .investigativo::before {
    background-color: #6366f1; // azul
  }

  .artistico::before {
    background-color: #ec4899; // rosa
  }

  .social::before {
    background-color: #22c55e; // verde
  }

  .realista::before {
    background-color: #f97316; // laranja
  }

  .empreendedor::before {
    background-color: #eab308; // amarelo
  }

  .convencional::before {
    background-color: #0ea5e9; // azul claro
  }
}
</style>
