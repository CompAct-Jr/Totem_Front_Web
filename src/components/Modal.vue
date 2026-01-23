<template>
    <div class="overlay" v-if="isActive">
        <div class="modal">
            <button class="close_btn" @click="close()">Close</button>
            <slot>
                
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({isActive : Boolean});

    const emit = defineEmits(['close']);

    const close = ()=>{
        emit('close');
    }

    const handleSubmitForm = ()=>{

    }

</script>

<style lang="scss">
    @import '../assets/_variables.scss';
    @import '../assets/mixins';

    .overlay{
        background-color: $primary_8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 50;
        @include centralizar_flex();

        .modal{
            width: 50%;
            height: 60vh;
            background-color: $primary_2;
            border-radius: 16px;
            z-index: 60;
            padding: 8px;

           .close_btn{
                @include criar_botao($primary_2, $primary_6, 1.1rem);
                float: right;
                transition: scale ease 0.4s;
                &:hover{
                    scale: 1.05;
                }
            }
        }
    }
</style>