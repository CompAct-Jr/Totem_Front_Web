<template>
  <nav class="navHeader" :class="{ hidden: !menuAberto }">
    <div class="logo">
      <img :src="logomarca" alt="" />
      <span>TOTEM VOCACIONAL</span>
    </div>

    <div class="menu" @click.self="toggleOpcoes()">
      <span>Menu</span>
      <img :src="iconMenu" alt="" @click.self="toggleOpcoes()" />

      <div class="opcoes" :class="{ hidden: !opcoesAberta }">
        <button class="btn-exit" @click="resetar()">Resetar</button>
        <button class="btn-save" @click="salvar()">Salvar</button>
      </div>
    </div>

    <button class="toggleMenu" @click="toggleMenu()" :class="{ hidden: !menuAberto }">
      {{ menuAberto ? '^' : 'V' }}
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useTestStore } from '@/stores/Teste';
import { onMounted, ref } from 'vue';

import logomarca from '@/images/logo.png';
import iconMenu from '@/images/icon_menu.png';

import { storeToRefs } from 'pinia';

const testeStore = useTestStore();
const {estado, usuario} = storeToRefs(testeStore)

const menuAberto = ref(false);
const opcoesAberta = ref(false);


const toggleMenu = () => {
  menuAberto.value = !menuAberto.value;
  opcoesAberta.value = false;
}

const toggleOpcoes = () => {
  opcoesAberta.value = !opcoesAberta.value;
}

const resetar = () => {
  alert('tem certeza?');
  testeStore.resetar();
  testeStore.removerUsuario;
}

const salvar = () => {
  alert('teste foi salvo');
}

onMounted(() => {
  setTimeout(() => {
    menuAberto.value = true;
  }, 300)
})
</script>

<style lang="scss">
@use '@/assets/index' as *;

$logomarca: '/images/logo.png';
$iconMenu: '/images/icon_menu.png';

.navHeader {
  width: 100%;
  height: 12vh;
  background-color: $primary_2;
  border-radius: 0 0 16px 16px;
  position: fixed;
  box-shadow: $primary_4 0 0 10px;
  padding: 0 16px 0 16px;

  transform: translateY(0);
  transition: transform 0.4s ease-in-out;

  &.hidden {
    transform: translateY(-100%);
  }

  @include fixar_elemento(0, 0, 100);
  @include between_flex;

  div {
    @include around_flex;
    min-width: 150px;
    min-height: 42px;

    span {
      color: $primary_3;
      font-weight: 600;
    }

    img {
      width: 32px;
    }
  }

  .logo {
    img {
      width: 64px;
    }
  }

  .menu {
    padding: 4px;
    border: solid 2px $primary_3;
    border-radius: 8px;
    box-shadow: $primary_7 0 0 4px;
    cursor: pointer;
    position: relative;
  }
}

.toggleMenu {
  position: absolute;
  z-index: 200;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);

  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-color: $primary_2;
  color: $primary_3;
  font-size: 20px;
  cursor: pointer;
  box-shadow: $primary_4 0 4px 10px;

  transition: background-color 0.2s ease, color 0.2s ease;

  &.hidden {
    background-color: $primary_1;
    color: $primary_2;
  }
}

.opcoes {
  position: absolute;
  bottom: 0px;
  right: 0px;
  transform: translateY(calc(100% + 4px));
  width: 100%;
  padding: 4px;
  border-radius: 8px;
  background-color: $primary_2;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .btn-save {
    @include criar_botao($primary_2, $primary_5, 1.1rem);
    width: 100%;
  }

  .btn-exit {
    @include criar_botao($primary_2, $primary_6, 1.1rem);
    width: 100%;
  }

  transition: transform 0.25s ease,
  opacity 0.25s ease;

  &.hidden {
    transform: translateY(calc(100% + 4px)) scale(1);
    opacity: 0;
    pointer-events: auto;
  }
}
</style>