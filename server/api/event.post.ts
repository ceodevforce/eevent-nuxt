export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await useBody(event)
    const cookies = await useCookies(event)
    // console.log(config)
    console.log(config.public.supabase.cookies)
    // console.log(config.public.supabase.client)
    // console.log(body)
    console.log(cookies)


    return {
        body
    }

})