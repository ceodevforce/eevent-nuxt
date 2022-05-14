<script setup>
import { FormKitSchema } from '@formkit/vue'
import event from '../../formkit/event.formkit.json'

const user = useSupabaseUser();
const client = useSupabaseClient();

console.log("USER:", user);
const submitted = ref(false);
const formData = ref({});
// const openData = reactive()

//TODO: add supabase config

//TODO: Add tables for data upload to supabase
//FIXME: Rows and columns are not working
//TODO: Complete formkit - adding the form schema
//FIXME: Fix the schema and themeing of the form
//TODO: Wire up the SSR backend of Nuxt3 

const onSubmit = async () => {
  // TODO: submit formData to server (supabase)
  await new Promise(resolve => setTimeout(resolve, 1000));
  submitted.value = true;
  console.log('submitted', formData.value);
}
</script>
<template>
  <div>
    
    <div class="container mx-auto p-6">
      <h1>Place All Event Here</h1>
      <section class="bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto p-6">
            <FormKit type="form" v-model="formData" submit-label="Add an Event" @submit="onSubmit">
                <FormKitSchema :schema="event"/>
            </FormKit>
        </div>
      </section>
    </div>
  </div>
</template>
