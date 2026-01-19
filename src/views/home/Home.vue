<template>
    <Transition name="fade" appear>
        <InfoBox v-if="estado === TesteEstado.CADASTRO">
            <h2>Encontre sua vocação. Comece sua jornada aqui.</h2>
            <button class="play_btn" @click="iniciarTeste()">
                <span>Começar Agora</span>
                <img src="/public/i_play.png" alt="botao de começar">
            </button>
        </InfoBox>
    </Transition>
    
    <Modal/>
</template>

<script setup lang="ts">
import InfoBox from '@/components/InfoBox.vue';
import Modal from '@/components/Modal.vue';

import { storeToRefs } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { useTestStore } from '@/stores/Teste';

const testeStore = useTestStore();
const { estado } = storeToRefs(testeStore);

const iniciarTeste = ()=>{
    testeStore.iniciar();
}

</script>

<style lang="scss">
@import '/src/assets/variables';
@import '/src/assets/mixins';

.play_btn{
    @include criar_botao($primary_2, $primary_5, 1.2rem, 16px);
    @include centralizar_flex;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
