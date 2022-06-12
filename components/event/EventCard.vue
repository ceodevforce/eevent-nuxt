<script setup lang="ts">

interface Props {
    event: object;
}

const { event } = defineProps<Props>()
console.log(event);
</script>
<template>
<div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-3x1 font-bold text-gray-800 uppercase dark:text-white">Event Title: {{event.title}}</h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Description: {{event.description}}</p>
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Location: {{ event.location }}</p>

                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Date: {{ event.date }}</p>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Time: {{event.time }}</p>

    </div>
</div>
</template>