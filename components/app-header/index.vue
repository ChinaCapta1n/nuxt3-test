<template>
    <div class="bg-black h-[40px]"></div>
    <header class="relative">
        <div class="container px-[20px] mx-auto flex items-center">
            <div class="mr-auto">
                <img :src="LogoImage" alt="">
            </div>
            <ul class="absolute lg:static top-[100%] left-0 right-0 lg:flex desktopMenu bg-white z-10 py-[20px] lg:py-0">
                <li class="flex items-center text-[11px] ml-[30px]" v-for="link in links" :key="link.id">
                    <template v-if="!link.isLanguage">
                        <NuxtLink class="block h-full py-[10px] lg:py-[20px]" :to="localePath(link.url)">
                            {{ link.text }}
                        </NuxtLink>
                    </template>
                    <template v-else>
                        <NuxtLink class="block h-full py-[10px] lg:py-[20px]" :to="switchLocalePath(link.url)">
                            {{ link.text }}
                        </NuxtLink>
                    </template>
                </li>
            </ul>
            <div class="block lg:hidden cursor-pointer" @click.stop="toggle_menu">
                <span class="block h-[2px] w-[30px] mb-[7px] bg-black"></span>
                <span class="block h-[2px] w-[30px] mb-[7px] bg-black"></span>
                <span class="block h-[2px] w-[30px] mb-[7px] bg-black"></span>
            </div>
        </div>
    </header>
</template>

<script setup>
import LogoImage from '~/assets/images/logo.jpeg';

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const links = [
    {
        "id": 0,
        "text": "HOME",
        "url": "/",
        "isLanguage": false
    },
    {
        "id": 1,
        "text": "PORTFOLIO",
        "url": "/portfolio",
        "isLanguage": false
    },
    {
        "id": 2,
        "text": "ABOUT US",
        "url": "/about-us",
        "isLanguage": false
    },
    {
        "id": 3,
        "text": "INTERVIEW",
        "url": "/interview",
        "isLanguage": false
    },
    {
        "id": 4,
        "text": "VIDEO",
        "url": "/video",
        "isLanguage": false
    },
    {
        "id": 5,
        "text": "CONTACT US",
        "url": "/contact-us",
        "isLanguage": false
    },
    {
        "id": 6,
        "text": "ENGLISH",
        "url": "en",
        "isLanguage": true
    },
    {
        "id": 7,
        "text": "中文（香港）",
        "url": "tc",
        "isLanguage": true
    }
]

const toggle_menu = () => {
    const desktopMenu = document.querySelector('.desktopMenu');

    desktopMenu.classList.toggle('hidden');
}
</script>

<style scoped></style>