<template>
    <div class="all-news-cont">
        <newsComponent v-for="(item, index) in bookMarkedData" :key="index" :newsItem="item" />
    </div>
</template>
<script>
import newsComponent from '../components/newsComponent.vue'
export default {
    components: {
        newsComponent,
    },
    data () {
        return {
            bookMarkedData: []
        }
    },
    async created () {
        const data = await JSON.parse(localStorage.getItem('myBookmark'))
        this.bookMarkedData = data
    }

}
</script>
<style>
.all-news-cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 50px 50px;
}
</style>