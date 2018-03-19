<template>
    <div id="content">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-bars mui-pull-left mui-plus-visible"></a>
            <h1 class="mui-title">电影</h1>
        </header>
        <div class="movie-serchs">
            <input type="text"><button>搜索</button>
        </div>
        <div class="movie-main clarfix">
            <div class="movie-showing clarfix">
               <ul>
                   <li v-for="(movielist,key) in showingList.subjects" :key="movielist.id">
                       <router-link v-bind="{to:`/moviexq/${movielist.id}`}">
                           <img :src="movielist.images.small" alt="">
                           <p>{{movielist.title}}</p>
                       </router-link>
                   </li>
               </ul>
            </div>
            <div class="pages clarfix">
                <button @click="pre()">加载更多</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
  .movie-serchs{
      height: 0.8rem;
      width: 100%;
      margin: 0.9rem 0 0.2rem 0.4rem;
  }
  .movie-main{
      height: 100%;

  }
  .movie-serchs input{
      width: 70%;
      height: 33px;
  }
  .movie-serchs button{
      background-color: red;
      color: #fff;
  }
  .movie-showing{
      height: 100%;
  }
    .movie-showing li{
        width: 32%;
        height: 3.5rem;
        float: left;
        margin-left: 0.05rem;
        text-align: center;
        vertical-align: middle;
    }
  .movie-showing li button{
      width: 100%;
      height: 100%;
  }
  .movie-showing li img{
      width: 100%;
      height: 80%;
  }
  .movie-showing li p{
      color: #000;
  }
    .pages{
        width: 100%;
        height: 0.8rem;
        text-align: center;
    }

</style>
<script>
    import { Toast } from 'mint-ui'
    export default{
        data(){
            return{
                text:"电影",
                showingList:{},
                page:18,
                total:'',
            }
        },
        methods:{

           getShowing () {
               let url="https://api.douban.com/v2/movie/in_theaters";
               this.$http({
                   method:'jsonp',
                   url:url,
                   params:{
                       count:this.page,//把数据传给后台
                   }
               })
//
                   .then(function (data){
                       this.total=data.body.total;
                       this.showingList=data.body;
                   })
           },

            pre:function (e) {
               if(this.total<this.page){
                  Toast("没有更多了")
               }
                this.getShowing(this.page+=18)
            }
        },
        created(){
            this.getShowing();
        }
    }
</script>