<template>
    <div font-sans flex flex-col items-center justify-center h-screen>
        <div items-center grid grid-cols-3 gap-2>
            <NuxtImg dark:bg-zinc-900 rounded shadow src="/gravitalia.jpg" alt="Gravitalia" format="webp" width="90" />
            <hr h-px w-15 border-dashed border-0 border-t-4 border-gray-500 dark:border-gray-400>
            <NuxtImg rounded src="/favicon.webp" alt="Suba" width="90" />
        </div>
        <p text-4xl font-bold>
            <NuxtLink no-underline text-violet-600 dark:text-violet-500 to="https://www.gravitalia.com/">
                Gravitalia
            </NuxtLink>
            x Suba
        </p>
        <p text-lg xl:text-xl text-gray-500 dark:text-gray-400>
            <NuxtLink text-gray-500 dark:text-gray-400 hover:text-gray-600 underline to="https://github.com/Gravitalia/Remini">
                Security
            </NuxtLink>
            across services.
        </p>
    </div>
</template>