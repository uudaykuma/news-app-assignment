<template>
  <div class="main-conatiner">
    <serach-view @getSearchParams="getSearchParams" />
    <div class="all-news-cont">
      <no-record v-if="getAllNews?.length === 0" />
      <news-component v-else v-for="(item, index) in getAllNews" :key="index" :newsItem="item" />
      {{ getProducts }}
    </div>
  </div>
</template>

<script>
import newsComponent from '../components/newsComponent.vue'
import serachView from '../components/serachView.vue'
import {mapGetters} from 'vuex'
import noRecord from '../components/noRecord.vue'
export default {
  components: { 
    serachView,
    newsComponent,
    noRecord,
  },
  layout: 'default',
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getAllNews', 'getResultCount', 'getProducts', 'getPageCount']),
  },
  data () {
    return {
      extraParams: null,
      resultCount: 0,
    }
  },
  created () {
    this.fetch()
  },
  mounted () {
    this.scroll()
  },
  methods : {
    getSearchParams (payload) {
      this.extraParams = payload
      this.$store.dispatch('fetchAllNews', this.extraParams)
    },
    async fetch () {
      this.$store.dispatch('fetchAllNews', this.extraParams)
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.ceil(document.documentElement.scrollTop + window.innerHeight) >=
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          const currentpage = this.getPageCount + 21
          this.$store.dispatch('updatePageSize', currentpage)
          this.$store.dispatch("fetchAllNews", this.extraParams);
        }
      };
    },
  },
  
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
