<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
console.log(user);
const route = useRoute();
const router = useRouter();
console.log(route.path);

const logout = async() => {
    const { error } = await client.auth.signOut();
    if (error) {
        console.log(error);
    } else {
        console.log('logged out');
        router.push('/');
    }
}
</script>
<template>
    <div>
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify p-6 mx-auto text-gray-600 captialize dark:text-gray-300">
                <NuxtLink to="/"
                    class="text-gray transitions-colors duration-200 transform dark:hover:text-gray-200 border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6">
                    Home
                </NuxtLink>
                <NuxtLink
                    class="text-gray transitions-colors duration-200 transform dark:hover:text-gray-200 border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6">
                    About
                </NuxtLink>
                <NuxtLink
                    class="text-gray transitions-colors duration-200 transform dark:hover:text-gray-200 border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6">
                    Contact</NuxtLink>
                <div v-if="!user">
                    <NuxtLink to="/signup"
                        class="text-gray transitions-colors duration-200 transform dark:hover:text-gray-200 border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6">
                        Sign Up
                    </NuxtLink>
                    <NuxtLink to="/login"
                        class="text-gray transitions-colors duration-200 transform dark:hover:text-gray-200 border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6">
                        Login
                    </NuxtLink>
                </div>
                <div v-else>
                    <NuxtLink
                        to="/events"
                        class="text-gray transitions-colors duration-200 transform dark:hover:text-gray-200 border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6">
                        EEvents
                    </NuxtLink>
                    <NuxtLink @click="logout"
                        class="text-gray transitions-colors duration-200 transform dark:hover:text-gray-200 border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6">
                        Logout</NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>
