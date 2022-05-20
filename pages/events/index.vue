<script setup>
import { FormKitSchema } from '@formkit/vue'
import event from '../../formkit/event.formkit.json'

const user = useSupabaseUser();
const client = useSupabaseClient();

console.log("USER:", user);
const submitted = ref(false);
const formData = ref({});
const events = ref([]);
// const openData = reactive()


/**
// Insert the following code into the `created` hook of the `MainNavbar` component:
const { data, error } = await supabase
  .from('event')
  .insert([
    { some_column: 'soer_comeValue', othlumn: 'otherValue' },
  ])

  // Read all rows

  let { data: event, error } = await supabase
  .from('event')
  .select('*')

*/


const onSubmit = async () => {
  // TODO: submit formData to server (supabase)
  // await new Promise(resolve => setTimeout(resolve, 1000));
  const { data, error } = await client.from('event').insert([
    {
      title: formData.value.title,
      description: formData.value.description,
      date: formData.value.updated_at,
      time: formData.value.time,
      location: formData.value.location,
    }]);
   
  submitted.value = true;
  console.log('submitted', formData.value);
}

const loadEvents = async () => {
  
  try {
    let { data, error } = await client.from('event').select('*');
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      events.value = data;
    }
  } catch(e) {
    console.log(e);
  }

}

onMounted(()=> {
  console.log("mounted");
  loadEvents();
})


//TODO: add supabase config

//TODO: Add tables for data upload to supabase
//FIXME: Rows and columns are not working
//TODO: Complete formkit - adding the form schema
//FIXME: Fix the schema and themeing of the form
//TODO: Wire up the SSR backend of Nuxt3 


</script>
<template>
  <div>
    
    <div class="container mx-auto p-6">
      <h1>Place All Event Here</h1>
      <section class="bg-gray-300 dark:bg-gray-800">
        <div class="container mx-auto p-6">
            <FormKit type="form" v-model="formData" submit-label="Add an Event" @submit="onSubmit">
                <FormKitSchema :schema="event"/>
            </FormKit>
        </div>
      </section>
      <section class="bg-gray-500 dark:bg-gray-800">
        <div class="container mx-auto p-6">
           <div class="flex items-center">
             <div v-if="events">
             <EventCard v-for="(event, index) in events" :event="event" :key="event.id"/>

             </div>
           </div> 
        </div>
      </section>
    </div>
  </div>
</template>
