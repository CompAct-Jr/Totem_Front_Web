<template>
    <Transition name="fade" appear>
        <InfoBox v-if="estado === TesteEstado.CADASTRO && !isModalActive">
            <h2>Encontre sua vocação. Comece sua jornada aqui.</h2>
            <button class="play_btn" @click="abrirModalCadastro()">
                <span>Começar Agora</span>
                <img :src="i_play" alt="botao de começar">
            </button>
        </InfoBox>
    </Transition>

    <Transition name="fade" appear>
        <Modal :is-active="isModalActive" @close="closeModal()">
            <p class="info_modal">
                Olá! Bem-vindo(a) ao Teste Vocacional do Totem. Sabemos que decidir o futuro é
                um grande passo, e estamos aqui para apoiar você. Este teste rápido, de
                aproximadamente 10 minutos, foi criado para iluminar seus interesses e talentos,
                conectando você com áreas de estudo que têm tudo a ver com o seu perfil.
                Não há respostas certas ou erradas. O mais importante é ser sincero(a). Ao final,
                você receberá um resultado personalizado para guiar sua decisão.
                Para começarmos, preencha seus dados abaixo. Assim, podemos enviar seu
                resultado e dicas valiosas diretamente para você!
            </p>
        </Modal>
    </Transition>

</template>

<script setup lang="ts">
import InfoBox from '@/components/InfoBox.vue';
import Modal from '@/components/Modal.vue';

import { storeToRefs } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { useTestStore } from '@/stores/Teste';
import { ref } from 'vue';

import i_play from '@/images/i_play.png';

const testeStore = useTestStore();
const { estado } = storeToRefs(testeStore);

const abrirModalCadastro = ()=>{
    isModalActive.value= true;
}

const isModalActive = ref(false);

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

.info_modal{
    text-align: center;
    border: solid 2px $primary_3;
    padding: 8px;
    border-radius: 8px;
    color: $primary_7;
}
</style>
