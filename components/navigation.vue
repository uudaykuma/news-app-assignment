<template>
    <nav>
        <div class="container">
            <div class="title">
                News-app
            </div>
            <div class="nav-route">
                <nuxt-link to="/">News</nuxt-link>
                <nuxt-link to="/bookmarks">Bookmarks</nuxt-link>
            </div>
            <div class="float-nav" v-if="showNavBar" @click="showNavBarmenu">
                <nuxt-link to="/">News</nuxt-link>
                <nuxt-link to="/bookmarks">Bookmarks</nuxt-link>
            </div>
            <div class="ham-menu" @click="showNavBarmenu">
                <div class="row1"></div>
                <div class="row1"></div>
                <div class="row1"></div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            showNavBar: false
        }
    },
    methods: {
        showNavBarmenu () {
            this.showNavBar = !this.showNavBar
        },
        // hideNavBar () {
        //     this.showNavBar = !this.showNavBar
        // }
    }
}
</script>

<style>
.ham-menu {
    display: none;
}
@media (max-width: 480px) {
    .container {
        padding: 20px;
    }
    .nav-route {
        display: none;
    }
    .ham-menu {
        display: block;
        border: 2px solid white;
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        justify-content: center;
        align-items: center;
    }
    .row1 {
        width: 40px;
        height: 3px;
        background: white;
    }
    .float-nav {
        position: absolute;
        width: 91%;
        height: 100px;
        background: rgb(198, 196, 196);
        top: 60px;
        margin-right: 50px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>