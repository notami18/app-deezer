<template>
    <nav>
        <div class="navbar-left">
            <img
                src="https://e-cdn-files.dzcdn.net/cache/slash/images/common/logos/deezer_black.f81ede323baaf2e257b7ffaa71d657af.png"
                alt="logo"
                class="logo"
            />
        </div>
        <div class="navbar-center">
            <div class="search">
                <form @submit.prevent="buscar(artist)">
                    <input
                        v-model="artist"
                        type="search"
                        name="search"
                        id="search"
                        class="input"
                        placeholder="Search ..."
                    />
                    <svg
                        role="presentation"
                        class="i-search"
                        viewBox="0 0 32 32"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentcolor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                    >
                        <circle cx="14" cy="14" r="12" />
                        <path d="M23 23 L30 30" />
                    </svg>
                    <input class="btn-search" type="submit" value="Search" />
                </form>
            </div>
        </div>
        <div></div>
    </nav>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue"
import { useI18n } from 'vue-i18n'
const emit = defineEmits(['busqueda'])
const artist = ref("")
const buscar = (params: string) => {
    emit('busqueda', params)
}

</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid var(--very-light-pink);
}

.menu {
    display: none;
}

.logo {
    width: 100px;
}

.navbar-left ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    height: 60px;
}

.navbar-left {
    display: flex;
}

#search + svg {
    margin-left: -30px;
    margin-bottom: -2px;
}

#search + svg {
    visibility: hidden;
}
#search:placeholder-shown + svg {
    visibility: visible;
}

.input {
    background-color: var(--text-input-field);
    border: none;
    border-radius: 8px;
    height: 48px;
    font-size: var(--md);
    padding: 12px;
    margin-left: 12px;
    width: 424px;
}

.btn-search {
    margin-left: 16px;
    border-radius: 8px;
    padding: 12px;
    background-color: rgb(0, 143, 143);
    color: white;
    border: none;
    cursor: pointer;
}
</style>
