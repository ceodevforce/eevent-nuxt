<script setup>
//TODO: Initalize here in App.vue the all data from the server / supabase
//TODO: Setup Pinia (state management)
//TODO: Add event to the Nuxt server api 
//FIXME: Themeing the form

import { useEvent } from './store/events';

const { data } = await useAsyncData('api', () => $fetch('/api/event'))
 
const eventData = reactive(data)
// Variables
// const events = ref(null)
const user = useSupabaseUser();
const client = useSupabaseClient();

//Pinia State Management
const store = useEvent();
store.events = eventData.value

// store.api = eventData.api

// Accessing the state
//FIXME: Modify for $patch
// events.value = store.events;
// store.events = eventData.value;

const loadEvents = async () => {
  // Load the data from the Nuxt Api Server (SSR) or Supabase
  try {
    // let { data, error } = await client.from('event').select('*');
    // if (error) {
    //   console.log(error);
    // } 
    // store.events = eventData.value
    // if (!data) {
    //   store.events = eventData
    // } else {
    //   store.events = data
    // }
   
  } catch(e) {
    console.log(e);
  }
}


onMounted(()=> {
  loadEvents();
})
</script>
<template>
  <div>
    <NuxtLayout>
          <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
