<template>
    <Transition name="fade" appear>
        <InfoBox v-if="estado === TesteEstado.CADASTRO">
            <h2>Encontre sua vocação. Comece sua jornada aqui.</h2>
            <button class="play_btn" @click="abrirModalCadastro()">
                <span>Começar Agora</span>
                <img src="/public/i_play.png" alt="botao de começar">
            </button>
        </InfoBox>
    </Transition>

    <Transition name="fade" appear>
        <Modal :is-active="isModalActive" @close="closeModal()"/>
    </Transition>

</template>

<script setup lang="ts">
import InfoBox from '@/components/InfoBox.vue';
import Modal from '@/components/Modal.vue';

import { storeToRefs } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { useTestStore } from '@/stores/Teste';
import { ref } from 'vue';

const testeStore = useTestStore();
const { estado } = storeToRefs(testeStore);

const abrirModalCadastro = ()=>{
    isModalActive.value= true;
}

const isModalActive = ref(true);

const closeModal = ()=>{
    isModalActive.value = false;
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
