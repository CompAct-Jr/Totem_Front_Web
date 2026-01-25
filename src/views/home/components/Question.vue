<template>
    <div class="question">
        <span class="id_question">{{ question?.id }}</span>
        <h4>{{ question?.titulo }}</h4>

        <form class="form_question" @submit.prevent="handleSubmitForm()">
            <label v-for="option in question?.opcoes" :key="option.id" class="option">
                <input type="checkbox" :checked="isCheckd(option.analysisEnum)"
                    @change="toggleOption(option.analysisEnum)" />
                <span>
                    {{ option.text }}
                </span>
            </label>
            <div>
                <button type="submit" class="exit_btn">Voltar</button>
                <button type="submit" class="play_btn">Seguir</button>
            </div>
        </form>

    </div>
</template>

<script setup lang="ts">
import { useTestStore } from '@/stores/Teste';
import type { AnalysisEnum } from '@/types/Analysis';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const testStore = useTestStore();
const {
    estado,
    usuario,
    questions,
    analysis,
    currentId
} = storeToRefs(testStore)

const question = computed(() => { return questions.value[currentId.value - 1] });

const isCheckd = (response: AnalysisEnum): boolean => {
    return false;
}

const toggleOption = (response: AnalysisEnum) => {

}

const handleSubmitForm = () => {

}

</script>

<style lang="scss" scoped>
@use '@/assets/index.scss' as *;

.question {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: relative;
    gap: 16px;
    color: $primary_7;

    .id_question {
        width: 32px;
        height: 32px;
        @include criar_botao($primary_2, $primary_5, 1rem, 50%);
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 60;
        cursor: default;
    }

    h4 {
        text-align: center;
        margin-top: 48px;
    }

    .form_question {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        width: 100%;
        gap: 8px;
        border: solid 2px $primary_5;
        border-radius: 8px;
        padding: 8px;

        .option {
            input {
                transform: scale(1.2);
            }

            span {
                margin-left: 1rem;
            }
        }

        div{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 1rem;
        }
    }
}

.play_btn {
    @include criar_botao($primary_2, $primary_5, 1.2rem, 4px);
    @include centralizar_flex;
    transition: scale ease 0.4s;

    &:hover {
        scale: 1.05;
    }

    width: 200px;
}

.exit_btn {
    @include criar_botao($primary_2, $primary_6, 1.1rem);
    @include centralizar_flex;
    transition: scale ease 0.4s;

    &:hover {
        scale: 1.05;
    }

    width: 200px;
}
</style>