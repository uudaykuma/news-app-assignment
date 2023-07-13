<template>
    <div class="news-conatiner">
        <div class="img-box">
            <img :src="newsItem?.urlToImage" alt="">
        </div>
        <div class="news-discription">
            {{newsItem.description}}
        </div>
        <div class="cta-btns">
            <button @click="redirectToPage(newsItem.title)" class="goto-cta">Detail page</button>
            <button v-if="!isbookmarkedPage" @click="saveToBookmark(newsItem)" class="bookmark-cta">
                <img v-if="!isBookmarked" src="https://w7.pngwing.com/pngs/522/320/png-transparent-bookmark-computer-icons-bookmark-miscellaneous-ribbon-angle-thumbnail.png" alt="">
                <img v-else src="https://w7.pngwing.com/pngs/430/166/png-transparent-bookmark-computer-icons-bookmark-angle-rectangle-black-thumbnail.png" alt="">
            </button>
        </div>
    </div>
</template>
<script>
// const exsistingBookmark = process.client ? JSON.parse(localStorage.getItem('myBookmark')) : []
export default {
    props: {
        newsItem: [],
    },
    data () {
        return {
            isbookmarkedPage: false,
            isBookmarked: false,
        }
    },
    beforeMount () {
        const routeName = this.$route.name
        if(routeName === "bookmarks" ) {
            this.isbookmarkedPage = true
        }
    },
    mounted () {
       const booked =  JSON.parse(localStorage.getItem('myBookmark')) || []
       for (let ob1 of booked) {
            if(ob1.title === this.newsItem.title) {
                this.isBookmarked = true
            } else {
                this.isBookmarked = false
            }
       }
    },
    methods: {
        checkbookMark () {

        },
        redirectToPage (title) {
            this.$router.push({
                path: '/details',
                query: { key: title }
            })
        },
        saveToBookmark (newsObj) {
            const exsistingBookmark = JSON.parse(localStorage.getItem('myBookmark')) || []
            const index = exsistingBookmark.findIndex(item => item?.title === newsObj.title)
            if (index !== -1) {
                exsistingBookmark.splice(index, 1);
            } else {
                exsistingBookmark.push(newsObj);
            }
            localStorage.setItem('myBookmark', JSON.stringify(exsistingBookmark))


            if(!exsistingBookmark.find(val => val?.title === newsObj.title)) {
                this.isBookmarked = false
            } else {
                this.isBookmarked = true
            }
        }
    }
    
}
</script>

<style>
.news-conatiner {
    flex-basis: calc(33.33% - 20px);
    margin-bottom: 20px;
    box-sizing: border-box;
    -webkit-box-shadow: -2px 0px 17px 3px rgba(0,0,0,0.09);
    -moz-box-shadow: -2px 0px 17px 3px rgba(0,0,0,0.09);
    box-shadow: -2px 0px 17px 3px rgba(0,0,0,0.09);
    border-radius: 8px;
}
 @media (max-width: 768px) {
    .news-conatiner {
        flex-basis: calc(50% - 20px);
    }
}
        
@media (max-width: 480px) {
    .news-conatiner {
        flex-basis: calc(100% - 20px);
    }
}
.img-box {
    height: 250px;
}
.img-box > img {
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0px 0px;
}
.news-discription {
    padding: 20px;
    height: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cta-btns {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bookmark-cta {
    border: none;
    outline: none;
}
.bookmark-cta >  img {
    width: 20px;
    height: 20px;
}
.goto-cta {
    padding: 10px;
    border: none;
    outline: none;
    font-weight: 600;
    /* border-radius: 8px; */
}
</style>