<script setup lang="ts">
import type { ButtonVariant } from '@/types'

const props = defineProps<{
  variant?: ButtonVariant
}>()

const variantClass = computed(() => props.variant ?? 'default')
</script>

<template>
  <button class="button" :class="variantClass">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem; 
  height: 2rem;
  padding: 0.5rem 1rem; 
  align-items: center;
  border-radius: 0.28rem; 
  border: 1px solid $gray;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 0.875rem; 
  cursor: pointer;

  &.default {
    background-color: $black; 
    color: $light-gray; 

    &:hover {
      background-color: $light-black; 
    }
  }

  &.danger {
    background-color: $red;
    color: $light-gray;

    &:hover {
      background-color: $light-red;
    }
  }

  &.outline {
    border: 1px solid $gray;
    background-color: #fff;

    &:hover {
      background-color: $light-gray;
    }
  }

  &.surface {
    background-color: $gray;

    &:hover {
      background-color: $light-gray;
    }
  }

  &.link {
    border: 0;
    background-color: transparent;

    &:hover {
      color: $light-black;
    }
  }
}
</style>