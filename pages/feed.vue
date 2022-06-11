<script setup lang="ts">
import { useEvent } from '../store/events';

let events = ref(null);
const user = useSupabaseUser();
const client = useSupabaseClient();

const route = useRoute();
const router = useRouter();

const store = useEvent();

events.value = store.getEvents
// console.log('events', events.value.data);


//TODO: Add features to the eevent feed to allow the user to edit and delete events 
// no cards are needed.



</script>
<template>
    <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <h1 class="text-2x1 font-semibold text-center text-gray-800 lg:text-4x1 dark:text-white">Lastest Eevent</h1>
                <div class="mt-8 xl:mt-16 lg:flex lg:mx-12">
                    <div class="lg:mx-12">
                        <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Event Tags/ Category</h1>
                        <div class="mt-4 space-y-4 lg:mt-8">
                            <NuxtLink to="/party" class="block text-red-600 dark:text-gray-50 hover:underline">Party</NuxtLink>
                            <NuxtLink to="/food" class="block text-red-600 dark:text-gray-50 hover:underline">Food</NuxtLink>
                            <NuxtLink to="/music" class="block text-red-600 dark:text-gray-50 hover:underline">Music</NuxtLink>
                            <NuxtLink to="/art" class="block text-red-600 dark:text-gray-50 hover:underline">Art</NuxtLink>
                        </div>
                    </div>
                    <div class="flex-1 mt-8 lg:mx-12 lg:mt-0">
                        <div>
                            <h1 v-for="todo in events.data" :key="todo.id" class="mx-4 text-xl text-gray-700 dark:text-white">
                            <NuxtLink :to="todo.title">{{ todo.title }}</NuxtLink></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>