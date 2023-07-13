<template>
    <div class="detail-cnatiner">
        <div class="img-cont">
            <img :src="getDetailsInfo().urlToImage ? getDetailsInfo().urlToImage : 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=1060&t=st=1689085705~exp=1689086305~hmac=53900cba56e3b76a1944c4824852423b76d04da27ceaff84812d0cde195a7b24'" alt="">
        </div>
        <div class="details-decs">
            <h1 class="detail-title">{{getDetailsInfo().title}}</h1>
            <h3 class="detail-author">Author: {{getDetailsInfo().author}} </h3>
            <p class="detail-description">{{getDetailsInfo().description}}</p>
            <p>{{getDetailsInfo().content}}</p>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(['getAllNews']),
    },
    data () {
        return {
            title: this.$route.query.key,
            allNews: this.getAllNews
        }
    },
    methods: {
        getDetailsInfo () {
            const allNews = this.getAllNews
            const details = allNews?.filter(item => item.title === this.title)
            return details[0]
        }
    },
}
</script>

<style>
.detail-cnatiner {
    width: 70%;
    margin: 50px auto;
    padding: 20px;
    display: flex;
    gap: 20px;
    -webkit-box-shadow: -2px 0px 17px 3px rgba(0,0,0,0.09);
    -moz-box-shadow: -2px 0px 17px 3px rgba(0,0,0,0.09);
    box-shadow: -2px 0px 17px 3px rgba(0,0,0,0.09);
    border-radius: 8px;
}
@media (max-width: 768px)  {
    .detail-cnatiner {
        flex-direction: column;
    }
}
.detail-cnatiner > div {
    flex: 1;
}
.img-cont > img {
    width: 100%;
    height: 350px;
}
.detail-title {
    text-decoration: underline;
    font-size: 20px;
    color: rgb(53, 51, 51);
}
.details-decs {
    display: flex;
    gap: 20px;
    flex-direction: column;
}
.detail-author {
    color: gray;
}
.detail-description {
    color: rgb(108, 105, 100);
    font-weight: bold;
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>