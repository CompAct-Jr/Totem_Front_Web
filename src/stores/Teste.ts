import { defineStore } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { TesteStorageService } from '@/services/TesteStorageService';

interface State{
  estado: TesteEstado;
}

export const useTestStore = defineStore('teste', {
  state: (): State => {
    return {
      estado: TesteStorageService.carregar()
    }
  },

  actions: {
    iniciar(){
      this.estado = TesteEstado.PERGUNTAS;
      TesteStorageService.salvar(this.estado);
    },

    finalizar(){
      this.estado = TesteEstado.FINALIZADO;
      TesteStorageService.salvar(this.estado);
    },

    resetar(){
      this.estado = TesteEstado.CADASTRO;
      TesteStorageService.salvar(this.estado);
    }
  }
})