<template>
    <div class="">
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
  <div class="text">
    <span class="t1">
        Mattingly 解释道，Azure DevOps 工程师偶尔会对生产级数据库的快照进行保存，以查看报告上的问题或测试性能改进。为清理这些快照数据库，会有专门的后台每天运行，系统会在一段设定的时间后删除旧快照。

在最近的一波 sprint （敏捷开发术语中的迭代开发周期）中，Azure DevOps 工程师执行了一次代码升级，将已弃用的 Microsoft .Azure. Management.* 软件包换成受支持的 Azure.ResourceManager.* NuGet 软件包。

这个操作，连带着大量 pull request 变更请求，会将旧包中的 API 调用替换为新包中的 API 调用——而引发此次事件的拼写错误，就出现在 pull request 内，导致后台快照删除作业删掉了整个服务器。

Mattingly 表示：“这条 pull request 中的快照删除作业中，隐藏着一条拼写错误，它会删除 Azure SQL 数据库调用，并替换成删除托管数据库的 Azure SQL Server 调用。”

按理来说，Azure DevOps 有一系列测试可发现这类问题。但 Mattingly 称，该错误代码只在某些条件下运行，因此没有被现有的测试机制及时发现。 

Mattingly 表示，Azure DevOps 工程师使用安全部署实践（SDP）将 Sprint 222 部署到了 Ring 0（微软内部部署），那里不存在快照数据库，所以删除作业不会执行。但几天后，Azure DevOps 工程师又将其部署至 Ring 1（客户环境），也就是巴西南部的 scale-unit 设施。该环境中有一个比较旧的快照数据库，因此触发这个错误代码，于是它在删除 Azure SQL Server 的同时，还删掉了 scale-unit 设施中的 17 个生产级数据库。 

好在，据 Mattingly 介绍，此次事件并未引发数据丢失。为了防止问题再次发生，Mattingly 称微软已采取了各种修复和重置措施，并向所有受此中断影响的客户道歉。
    </span>

  </div>
</div>
</template>

<script>

import{defineComponent} from "vue"
export default defineComponent({
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
        },}

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
.text{
    width: 980px;
    height: 500px;
    line-height: 25px;
    background-color: cornsilk;
    margin: 20px auto;
}
.text .t1{
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: normal;


}
</style>
