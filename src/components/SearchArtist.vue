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
            <form @submit.prevent="">
                <input type="search" name="search" id="search" class="input" placeholder="Search ..." />
                <input type="submit" value="Search">
            </form>
            </div>
        </div>
        <div>
        </div>
    </nav>
</template>

<script setup lang="ts">

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


/* .input {
    background-color: var(--text-input-field);
    border: none;
    border-radius: 8px;
    height: 30px;
    font-size: var(--md);
    padding: 6px;
    margin-left: 12px;
} */
</style>
