<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-bars mui-pull-left mui-plus-visible"></a>
            <h1 class="mui-title">豆瓣查询</h1>
        </header>
        <router-view></router-view>
        <div id="content">
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item" to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="/movie">
                    <span class="mui-icon mui-icon-videocam"></span>
                    <span class="mui-tab-label">电影</span>
                </router-link>
                <router-link class="mui-tab-item" to="/music">
                    <span class="mui-icon mui-icon-pengyouquan"></span>
                    <span class="mui-tab-label">音乐</span>
                </router-link>
                <router-link class="mui-tab-item" to="/photo">
                    <span class="mui-icon mui-icon-image"></span>
                    <span class="mui-tab-label">相册</span>
                </router-link>
                <router-link class="mui-tab-item" to="/books">
                    <span class="mui-icon mui-icon-email-filled"></span>
                    <span class="mui-tab-label">图书</span>
                </router-link>
            </nav>
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
    .catalogue-list a{
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
                text:"主体",
            }
        },
        methods:{

        },

        created(){

        }
    }
</script>