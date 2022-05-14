<template>
    <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div class="max-w-xl">
                <h2 class="text-2x1 font-semibold text-gray-500 dark:text-gray-300 lg:text-3x1">
                    EEvent - <span>The Event Management App</span> 
                </h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae blanditiis, eius culpa ipsum numquam voluptatibus magni! Vel beatae dolorem iste quaerat perferendis accusamus, id neque esse numquam officia a sequi!
                </p>
                <div class="flex flex-col mt-6  space-y-3 lg:space-y-0 lg:flex-row">
                    <NuxtLink to="/signup" class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 py-2 px-4 border border-gray-200 rounded-md shadow-sm hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Sign Up</NuxtLink>
                    <NuxtLink to="/about" class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 py-2 px-4 border border-gray-200 rounded-md shadow-sm hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Getting Started</NuxtLink>
                </div>
            </div>
        </div>
        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
            <div class="w-full h-full bg-cover" style="background-image: url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80)">
                <div class="w-full h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>
</template>