<template>
    <div id="content">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-bars mui-pull-left mui-plus-visible"></a>
            <h1 class="mui-title">电影详情</h1>
        </header>
        <div class="xq-main">
           <div class="xq-r clarfix">
               <div class="xq-img">
                   <img :src="xqlist.images.small" alt="">
               </div>
               <div class="xq-name">
                   <h5>{{xqlist.title}}<span>{{xqlist.rating.average}}<i>分</i></span></h5>
                   <p>{{xqlist.countries[0]}}</p>
                   <p>类型:<span v-for="i2 in xqlist.genres">{{i2}}、</span></p>
                   <p>导演: <span v-for="i1 in xqlist.directors">{{i1.name}}</span></p>
                   <p>演员: <span v-for="i3 in xqlist.casts">{{i3.name}}、</span></p>
               </div>
           </div>
            <div class="xq-content">
                <p>{{xqlist.summary}}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
   .xq-main{
      margin: 50px 0.2rem 0 0.2rem;
   }
   .xq-r{
       width: 100%;
       height: 100%;
   }
    .xq-img{
        width: 50%;
        margin-right: 1%;
        height: 4rem;
        float: left;
    }
   .xq-img img{
       width: 100%;
       height: 100%;
   }
    .xq-name{
        width: 47%;
        height: 4rem;
        float: right;
    }
   .xq-name h5{
       font-size: 20px;
       color: #000;
   }
   .xq-name h5 span{
       color: green;
      margin-left: 0.2rem;
   }
   .xq-name p{
       color: #000;
   }
   .xq-content p{
       color: #000;
   }
    .xq-content{
        margin-top: 20px;
    }
</style>
<script>
    export default{
        data(){
            return{
                text:'电影详情',
                xqlist:{},
            }
        },
        methods:{
            getxqList:function () {
                let url=`https://api.douban.com/v2/movie/subject/${this.id}`;
                this.$http.jsonp(url)
                    .then(function (data) {
                        this.xqlist=data.body;
                    })
            }
        },
        created(){
          this.id=this.$route.params.id;
          this.getxqList()
        }
    }
</script>