<template>
    <div class="head">
        <div class="left">
            <img src="../../assets/logo/ZSKlogo.jpg"/>
        </div>
       <div class="center">
        <el-input v-model="input2" placeholder="Please Input" :suffix-icon="Search"/></div>
        <div class="right">
            <el-button-group>
            <el-button type="primary" :icon="ArrowLeft">学生端</el-button>
            <el-button type="primary">
              教师端<el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
            </el-button-group>
        </div>

    </div>
    <nav>
    <div class="el-menu-item" href="#" @click="toSY">首页</div>
    <div class="el-menu-item" href="#" @click="toGZ">高赞</div>
    <div class="el-menu-item" href="#" @click="toKX">科学</div>
    <div class="el-menu-item" href="#" @click="toSH">生活</div>
    <div class="el-menu-item" href="#" @click="toCJ">财经</div>
    <div class="el-menu-item" href="#" @click="toJY">教育</div>
    <div class="el-menu-item" href="#" @click="toSHH">社会</div>
  </nav>
  <div class="contents">
    <h2 class="h1">头条</h2>
    <div class="content1">
        <img class="i1"  src="../../assets/logo/banner1.jpg"/>
    </div>
    <div class="content2">
        <img class="i2" src="../../assets/logo/TT.png"/>
        <p class="p1">因一个代码拼写错误,17个生产级数据库被误删、瘫痪十几个小时!</p>
        <span class="c1">6月2日，微软首席软件工程经理 Eric Mattingly为这次故障出面道歉，
            并透露了具体原因：一个简单的错误拼写，导致了整整 17 个生产级数据库被删除。</span></div>
  </div>

</template>

<script>
import { ref } from 'vue'
import {  Search } from '@element-plus/icons-vue'
const input2 = ref('')
import{defineComponent} from "vue"

export default defineComponent({
    name:"article",
    methods:{
        toGZ:function (){
            this.$router.push('/GZ')
        },
        toKX:function (){
            this.$router.push('/KX')
        },
        toSH:function (){
            this.$router.push('/SH')
        }
        ,toCJ:function (){
            this.$router.push('/CJ')
        }
        ,toJY:function (){
            this.$router.push('/JY')
        },
        toSHH:function (){
            this.$router.push('/SHH')
        },
        toSY:function (){
            this.$router.push('/article')
        }
    }

});


</script>
<style lang="scss" scoped>
.head{
    width: 980px;
    height: 30px;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.head .left{
    float: left;
    width: auto;
    height: 50px;
    
}
.head .center{
    width: 500px;
    height: 100px;
    margin: 10px auto;

}
.head .right{
    float: right;
    margin-top: 10px;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  background-color:dodgerblue;
  border-bottom: solid 10px;
  border-bottom-color: white;
}
nav .el-menu-item {
  color: #FFFFFF;
  padding: 15px 50px;
  position: relative;
  text-align: center;
  border-bottom: transparent;
  display: flex;
  transition: 0.4s;
  font-size: larger;
  font-weight: bold;
}
.contents{
    width: 980px;
    height: 300px;
    margin:10px 10px;
    padding-top: 10px;
    display: flex;
    
}



.content2{
    width: 204px;
    height: 256px;
    margin: auto 50px;


    
}


.content2 .p1{
    font-size: large;
    font-weight: bold;
    width: 284px;
    height: 70px;
    padding-left: 10px;
    line-height: 30px;
    padding-top: 10px;
    // border-bottom: 1px solid #ddd;

}
.content2 .c1{
    font-size: small;
    color: darkgray;
    width: 284px;
    height: 20px;
    line-height: 20px;
    padding: 20px 10px ;
    margin: 10px 20px;



}

</style>
