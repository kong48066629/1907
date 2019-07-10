<template>
	<div class="box" v-gd="vis" dis="210"> 
   <div class="myheader" v-show="vis.flag">电影
     <div class="nav">
      <h2><router-link to="/home/film/nowplaying">正在上映</router-link></h2>
      <h2><router-link to="/home/film/comingSoon">即将上映</router-link></h2>
    </div>
   </div>
    <div class="swiper">
      <mySwiper />  
    </div>
    <div class="nav">
      <h2><router-link to="/home/film/nowplaying">正在上映</router-link></h2>
      <h2><router-link to="/home/film/comingSoon">即将上映</router-link></h2>
    </div>
    
		<ul id="list">
			<li v-for="item in list" class="row">
					<img :src="item.poster" width="100" />
          <div>
              {{item.name}}
              <p v-if="type==='nowplaying'">
              {{item.nation}} || {{item.runtime}}
              </p>
              <p v-else>
                  {{item.premiereAt}}
              </p>
          </div>
			</li>
		</ul>
	</div>
</template>
<script>
   import mySwiper from './mySwiper'
   export default {
   	   data(){
   	   	return {
   	   		type:'',
   	   		list:[],
               vis:{
                  flag:false
               }
   	   	}
   	   },
       created(){
        this.$router.push("/home/film/nowplaying")
       },
         components:{
               mySwiper
         },
   	   methods:{
   	   		getData(){
   	   			var type = this.type==='nowplaying'?1:2;
   	   			this.$axios.get(`/mz/gateway?`,              
              {
                params:{
                  cityId:110100,
                  pageNum:1,
                  pageSize:10,
                  type,
                  k:Date.now()
              },    

   	   				headers:{
   	   					"X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"154399058310458245367575"}`,
						"X-Host": `mall.film-ticket.film.list`
   	   				}
   	   			}).then((res)=>{
   	   				this.list=res.data.data.films;
   	   			})
   	   		}
   	   },
   	   watch:{
   	   	 $route:{
   	   	 	handler(newV){
   	   	 		this.type=newV.params.type;
   	   	 		this.getData();
   	   	 	},
   	   	 	deep:true,
   	   	 	immediate:true
   	   	 }
   	   }
   }

</script>
<style lang="scss">
      .box{
         position: fixed;
         top:0;
         bottom:0.98rem;
         right:0;
         left:0;
         overflow: auto;
      }
       .swiper {
      width:100%;
      height: 4.2rem;
      
      background: #ccc;
    }
    .myheader{
      position: fixed;
      width:100%;
      top:0;
      left:0;
      text-align: center;
      background: #FFF;   
    }
    .row{
      display: flex;
    }
    .row{
      img{
          margin:0.3rem;
      }
      div{
        flex:1;
        margin-top: 0.3rem;
      }
    }
</style>