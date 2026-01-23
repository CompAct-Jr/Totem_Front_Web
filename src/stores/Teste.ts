import { defineStore } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { TesteStorageService } from '@/services/TesteStorageService';
import type { Usuario } from '@/types/Usuario';
import { UsuarioService } from '@/services/UsuarioService';

interface State{
  estado: TesteEstado;
  usuario: Usuario | null;
}

export const useTestStore = defineStore('teste', {
  state: (): State => {
    return {
      estado: TesteStorageService.carregar(),
      usuario: UsuarioService.carregar(),
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