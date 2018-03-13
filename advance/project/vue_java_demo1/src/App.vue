<template>
  <div class="hello">
     <input type="text" v-model="code"/>
        <input type="button" @click = "aa"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code :''
    }
  },
     methods:{
         aa(){
           let self = this;

         this.$http.get('/index', {
            //参数
           params: {
                id: 10
            }
         }).then(function (res) {
            //成功获取数据
            console.log(res);
         }).catch(function (err) {
            //请求错误
            console.log(err);
         });

         }
       }
}
</script>