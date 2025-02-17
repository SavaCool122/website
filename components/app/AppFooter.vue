<script lang="ts" setup>
const website = useWebsite()

const colorMode = useColorMode()
const toggleTheme = function () {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const uiButton = { color: { gray: { ghost: 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-primary/60 dark:hover:bg-primary/40' } } }
</script>

<template>
  <div class="border-t border-gray-100 dark:border-gray-800">
    <footer class="container mx-auto xl:max-w-7xl px-4 md:px-6 pt-20 pb-20 md:pb-30 flex flex-col gap-12 md:gap-20">
      <div class="grid md:grid-cols-2 gap-y-6 gap-x-12 md:gap-x-25">
        <div class="grow flex flex-col gap-6 max-w-sm">
          <NuxtLink to="/" class="block">
            <AppLogo />
          </NuxtLink>
          <p class="max-w-lg text-sm md:text-base text-gray-500 dark:text-gray-400 italic">
            {{ website.footer.quote }}
          </p>
        </div>
        <ul class="flex gap-2">
          <li v-for="social in website.socials" :key="social.name">
            <UButton :rel="social.rel" :target="social.target" :to="social.url" :icon="social.icon" :aria-label="`Follow us on ${social.name}`" size="xl" variant="ghost" color="gray" :ui="{ icon: { xl: 'md:w-7 md:h-7' }, ...uiButton }" />
          </li>
        </ul>
        <nav class="mt-6 md:mt-0 md:justify-self-end md:col-start-2 md:row-start-1 grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-6 md:gap-10 text-[1.125rem]">
          <div v-for="list in website.footer.menu" :key="list.title" class="flex flex-col gap-4">
            <p class="font-bold text-gray-950 dark:text-gray-50">
              {{ list.title }}
            </p>
            <ul class="flex flex-col gap-3 text-gray-500 dark:text-gray-400">
              <li v-for="item in list.items" :key="item.url">
                <NuxtLink :to="item.url" :rel="item.rel" :target="item.target" class="hover:underline underline-offset-8">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>

        <div class="place-self-center md:place-self-end">
          <ClientOnly>
            <UTooltip :text="$colorMode.value === 'dark' ? 'Light Mode' : 'Dark Mode'">
              <UButton size="xl" variant="ghost" color="gray" square :trailing-icon="$colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" :ui="uiButton" aria-label="Toggle Theme" @click="toggleTheme">
                {{ $colorMode.value === 'dark' ? 'Light' : 'Dark' }}
              </UButton>
            </UTooltip>
          </ClientOnly>
        </div>
      </div>
      <AppFooterLicense class="text-sm dark:text-gray-400 text-center" />
    </footer>
  </div>
</template>
