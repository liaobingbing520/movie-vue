<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-bars mui-pull-left mui-plus-visible"></a>
            <h1 class="mui-title">大家推荐</h1>
        </header>
        <div id="content">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,key) in navimgs" :key="key">
                    <img :src="item.images.large" alt="" class="swImg">
                </mt-swipe-item>
            </mt-swipe>
            <div class="catalogue">
                <div class="catalogue-list">
                    <router-link to="/movie" class="a1 move-link">电影推荐     >></router-link>
                    <div class="cont move-c">
                        <div v-for="(mList,key) in moveimgs" :key="key">
                            <router-link v-bind="{to:`/moviexq/${mList.id}`}" class="img-cont">
                                <div>
                                    <img :src="mList.images.small" alt="">
                                </div>
                                <p>{{mList.title}}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="catalogue-list">
                    <router-link to="/books" class="a1 tusu-link">推荐图书    >></router-link>
                    <div class="cont tusu-c">
                        <a class="img-cont" v-for="(book,key) in bookcontnnt" :key="key">
                            <div>
                                <img src="../../static/imgs/ai.jpg" alt="">
                            </div>
                            <p>{{book.title}}</p>
                        </a>
                    </div>
                </div>
                <div class="catalogue-list">
                    <router-link to="/photo" class="a1 photo-link">相册   >></router-link>
                    <div class="cont photo-c">
                        <a class="img-cont">
                            <div>
                                <img src="../../static/imgs/th.jpg" alt="">
                            </div>
                            <p>{{dabobo.title}}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .mint-swipe{
        height: 4.5rem;
    }
    .mint-swipe-item{
        height: 4.5rem;
    }
    .swImg{
        width: 100%;
        height: 100%;
    }
    .catalogue-list{
        width: 100%;
        height: 100%;
    }
    .catalogue-list .a1{
        display: block;
        width: 100%;
        height: 0.7rem;
        line-height: 0.7rem;
        padding-left: 0.2rem;
        background-color: #ececec;
        box-shadow: 2px 2px 2px 2px #c7c7cc;
        color: #000;
    }
    .catalogue-list .cont{
        height: 3rem;
        width: 100%;
        overflow: hidden;
        padding: 0.1rem;
    }
    .img-cont{
        display: block;
        width: 24%;
        float: left;
        height: 3rem;
        margin-left: 0.05rem;
        text-align: center;
        overflow: hidden;
    }
    .img-cont p{
        font-size: 16px;
        margin-top: 0.15rem;
        white-space:nowrap;
        color: #000;
    }
    .img-cont>div{
        height: 2.2rem;
        width: 100%;
    }
    .catalogue-list .cont img{
        width: 100%;
        height: 100%;
    }
    .foolt{
        height: 1rem;
        width: 100%;
        text-align: center;
        background-color: #b2b2b2;
    }
    .foolt p{
        color: #6641e2;
        line-height: 1rem;
    }
</style>
<script>
    export default{
        data:function () {
            return{
                text:"首页",
                navimgs:{},
                moveimgs:{},
                bookcontnnt:{},
                dabobo:{},
            }
        },
        methods:{
            /*电影*/
            getSweip:function () {
                let url="https://api.douban.com/v2/movie/in_theaters";
                this.$http.jsonp(url)
                    .then(function (data) {
                        this.navimgs=data.body.subjects.slice(0,6);
                    })
            },
            getmove:function () {
                let url="https://api.douban.com/v2/movie/in_theaters";
                this.$http.jsonp(url)
                    .then(function (data) {
                        this.moveimgs=data.body.subjects.slice(0,4);
                    })
            },
            /*图书*/
            getbook:function () {
                let url="https://api.douban.com/v2/book/1003078";
                this.$http.jsonp(url)
                    .then(function (data) {
                        this.bookcontnnt=data.body.tags;
                    })
            },
            /*相册*/
            getphoto:function () {
                let url="https://api.douban.com/v2/album/74539453/photos";
                this.$http.jsonp(url)
                    .then(function (data) {
                        this.dabobo=data.body.album;
                    })
            }

        },

        created(){
            this.getSweip();
            this.getmove();
            this.getbook();
             this.getphoto();
        }
    }
</script>