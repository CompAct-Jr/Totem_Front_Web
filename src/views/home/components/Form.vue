<template>
    <h2>Formulario de Cadastro</h2>
  <form @submit.prevent="handleSubmit()">
    <div class="form-input">
      <label>Nome Completo *</label>
      <input type="text" v-model="form.nome" required />
    </div>

    <div class="form-input">
      <label>Idade *</label>
      <input 
      type="number" 
      min="1"
      max="100"
      step="1"
      v-model="form.idade" 
      required />
    </div>

    <div class="form-input">
      <label>Cidade *</label>
      <input type="text" v-model="form.cidade" required />
    </div>

    <div class="form-input">
      <label>WhatsApp (com DDD) *</label>
      <input type="tel" v-model="form.celular" required />
    </div>

    <div class="form-input">
      <label>Email</label>
      <input type="email" v-model="form.email"/>
    </div>

    <div>
      <label>
        <input type="checkbox"/>
        Aceito receber o resultado por email
      </label>
    </div>

    <button type="submit" class="play_btn">Pronto</button>
  </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    import type { FormUser } from '@/types/FormUser';

    const emit = defineEmits<{
         (e: 'submit_user', payload: typeof form.value): void
    }>()

    const handleSubmit = (): void => {
        emit('submit_user', {... form.value})
    }

    const form = ref<FormUser>({
        nome: '',
        email: '',
        celular: '',
        cidade: '',
        idade: 0
    })

</script>

<style lang="scss">
@use '@/assets/index.scss' as *;

h2{
    color: $primary_7;
    text-align: center;
}

form{
    width: 100%;
    @include centralizar_flex();
    gap: 16px;
    min-height: 50vh;
    color: $primary_7;

    .play_btn{
        @include criar_botao($primary_2, $primary_5, 1.2rem, 4px);
        @include centralizar_flex;
        transition: scale ease 0.4s;
        &:hover{
            scale: 1.05;
        }
    }
}

.form-input{
    @include form_input($primary_5);
    input{
        background-color: aliceblue;
        width: 300px;
        padding: 8px 16px;
    }
}

</style>