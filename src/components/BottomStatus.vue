<template>
    <footer class="footer">
        <div :class="{ active: estado === TesteEstado.CADASTRO }">
            Cadastro
        </div>
        <div :class="{ active: estado === TesteEstado.PERGUNTAS }">
            Perguntas
        </div>
        <div :class="{ active: estado === TesteEstado.FINALIZADO }">
            Finalizado
        </div>
    </footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { useTestStore } from '@/stores/Teste';

const testeStore = useTestStore();
const { estado } = storeToRefs(testeStore);
</script>

<style lang="scss">
@import '/src/assets/variables';
@import '/src/assets/mixins';

.footer {
    width: 100%;
    position: fixed;
    bottom: 0px;
    z-index: 100;
    background-color: $primary_2;
    box-shadow: $primary_7 0 0 10px;
    padding: 8px;
    @include centralizar_flex;
    gap: 16px;
    min-height: 10vh;


    div {
        padding: 12px 8px;
        width: 10%;
        border-radius: 12px;
        text-align: center;
        font-weight: 600;

        background-color: $primary_1;
        color: $primary_4;
        opacity: 0.5;

        transition:
            background-color 0.3s ease,
            color 0.3s ease,
            opacity 0.3s ease,
            transform 0.2s ease;

        &.active {
            background-color: $primary_5;
            color: $primary_2;
            opacity: 1;
            transform: scale(1.05);
        }
    }
}
</style>