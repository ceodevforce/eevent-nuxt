import {
    defineStore
} from 'pinia'

export const useEvent = defineStore('mainEvent', {
    state: () => {
        return {
            api: null,
            events: [],
            task: [{}],
        };
    },
    getters: {
        getEvents: state => state.events,
    },
    actions: {

    }
})