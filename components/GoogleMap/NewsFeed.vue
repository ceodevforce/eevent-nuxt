<script setup>
/**
Map component is using a library called vue3-google-maps.
//TODO: Add google maps api key to nuxt.config.js
//FIXME: The map is not working
 */

import { findProp } from '@vue/compiler-core';
import { GoogleMap, Marker } from 'vue3-google-map';

const center = ref(null)

center.value = {
  lat: -37.814,
  lng: 144.96332

}

</script>
<template>
    <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>