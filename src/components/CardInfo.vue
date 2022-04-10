<template>
    <section class="main-container">
        <div class="cards-container">
            <div class="music-card" v-for="info in data" :key="info.id">
                <img :src="info.album.cover_medium" alt="artist" />
                <div class="music-info">
                    <div>
                        <p>{{ info.title_short }}</p>
                        <p>{{ info.artist.name }}</p>
                        <p>{{ info.explicit_lyrics ? "EXPLICITO" : "" }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { toRefs, defineProps, onMounted, computed } from "vue"
const props = defineProps({
    info: {
        type: Array,
        default: () => [],
    }
})

const { info } = toRefs(props)

const data = computed(() => {
    return info.value[0];
});

</script>

<style scoped>
.main-container {
    margin-top: 22px;
}
.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    gap: 16px;
    place-content: center;
}

.music-card {
    width: 240px;
}

.music-card img {
    width: 240px;
    height: 240px;
    border-radius: 20px;
    object-fit: cover;
}

.music-info {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.music-info div p:nth-child(1) {
    font-weight: bold;
    font-size: var(--md);
    margin-bottom: 4px;
    margin-top: 0;
}

.music-info div p:nth-child(2) {
    font-size: var(--sm);
    margin-top: 0;
    margin-bottom: 0;
    color: var(--very-light-pink);
}

@media (max-width: 640px) {
    .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 140px);
        gap: 16px;
    }
    .music-card {
        width: 140px;
    }
    .music-card img {
        width: 140px;
        height: 140px;
    }
}
</style>