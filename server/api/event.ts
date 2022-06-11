import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => { 
    const config = useRuntimeConfig() 
    console.log(config.cookies)
    const { url, key } = config.public.supabase
    const supabase = createClient(url, key)
    
    const { data, error } = await supabase.from('event').select('*')
    const { data: title, error: titleError } = await supabase.from('event').select('title')
    const { data: date, error: dateError } = await supabase.from('event').select('date')
    return {
        message: 'Successfully fetched data from Supabase',
        data,
        title,
        date,
    }
})