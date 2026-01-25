import { defineStore } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { TesteStorageService } from '@/services/TesteStorageService';
import type { Usuario } from '@/types/Usuario';
import { UsuarioService } from '@/services/UsuarioService';
import type { Questions } from '@/types/Questions';
import type { Analysis, AnalysisEnum } from '@/types/Analysis';
import { QuestionsService } from '@/services/QuestionsService';
import { AnalysisService } from '@/services/AnalysisService';

interface State{
  estado: TesteEstado;
  usuario: Usuario | null;
  questions: Questions[];
  analysis: Analysis[];
  currentId: number;
  responses: Record<number, AnalysisEnum[]>
}

export const useTestStore = defineStore('teste', {
  state: (): State => {
    return {
      estado: TesteStorageService.carregar(),
      usuario: UsuarioService.carregar(),
      questions: QuestionsService.carregar(),
      analysis: AnalysisService.carregar(),
      currentId: 1,
      responses: {} as Record<number, AnalysisEnum[]>
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
    },

    salvarUsuario(u: Usuario | null){
      this.usuario = u;
      UsuarioService.salvar(this.usuario);
    },

    removerUsuario(){
      UsuarioService.limpar();
    }
  }
})