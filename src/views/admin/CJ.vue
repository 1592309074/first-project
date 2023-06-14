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
  <div class="articles">
        <div class="adcate-tools">
            <el-button type="warning" @click="toAdd">添加</el-button>
        </div>
        <el-table :data="articles" style="width: 100%">
            <el-table-column fixed prop="id" label="编号" width="50" />
            <el-table-column prop="title" label="文章标题" @click="toYM">
                <template #default="scope">
                    <el-link :href="scope.row.url='https://blog.csdn.net/PAcaption/article/details/126469898'" type="primary" target="_blank">{{scope.row.title}}</el-link>
                </template>
            </el-table-column>
            <el-table-column prop="content" label="文章内容" />
            <el-table-column prop="updateTime" label="更新时间" />
            <el-table-column prop="createTime" label="创建时间" />
            
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentchange" />
    </div>
    <el-dialog v-model="dialogFormVisible" title="文章名称编辑">
        <el-form :model="article">
            <el-form-item label="文章标题" :label-width="formLabelWidth">
                <el-input v-model="article.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="文章内容" :label-width="formLabelWidth">
                <el-input v-model="article.content" autocomplete="off" />
            </el-form-item>
            <el-form-item label="更新时间" :label-width="formLabelWidth">
                <el-input v-model="article.updateTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="article.createTime" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="save">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { articleadd,articleedit,articlegetall,articledelete } from '../../http/article'
import{defineComponent} from "vue"
export default defineComponent({
    data() {
        return {
            articles:[],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            article: {
                "id": 0,//标志点 0添加 >0 更新
                "article.name": "",
                "article.content":"",
                "article.updateTime":"",
                "article.creaTime":"",

            },
            formLabelWidth: 80
        }
    },
    mounted() {
        this.getarticleall(1)
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                return item.toLowerCase().includes(this.query.toLowerCase());
            });
        }
    },
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
        },
        toAdd:function() {
            // console.log(this)
            // alert("ssssss")
            this.dialogFormVisible = true;
            this.article = {
                "articleCatId": 0,
                "content": "标题内容",
                "createTime": "创建时间",
                "deleted": 0,
                "id": 0,
                "open": 0,
                "title": "",
                "updateTime": "更新时间",
                "userinfoId": 0,
                "name":"姓名"
            };
        },
        save() {
            const it = this.article;
            if (it.id == 0) {
                articleadd(it).then(res => {
                    // this.ites.push(this.ites);
                    console.log(res)
                    if (res.success) {
                        //刷新页面
                        ElMessage.success("数据添加成功");
                        this.getarticleall();
                        this.dialogFormVisible = false;
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage.error("数据添加失败！");
                        return false;
                    }
                }).catch(err => {
                    ElMessage.error("网络请求失败,请重试");
                    this.dialogFormVisible = false;
                    return false;
                })
            }
            else {
                articleedit(it).then(res => {
                    console.log('更新成功');
                    if (res.success) {
                        //刷新页面
                        ElMessage.success("数据更新成功！");
                        this.dialogFormVisible = false;
                        this.getarticleall();
                        this.getarticleedit(this.ites.current);
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage.error("数据更新失败！");
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员');
                    this.dialogFormVisible = false;
                    return false;
                })
            }

        },
        getarticleall() {

            articlegetall().then(res => {
                console.log(res);
                this.articles = res.data.articles
            }).catch(err => {
                console.log(err);
            })

        },
        currentchange(current) {
            // console.log(current);
            this.getarticleall(current);
            this.all.current = current;//数据更新目前显示的页面
        },
        toEdit(scope) {
            // console.log(ites);
            this.dialogFormVisible = true;
            this.article = {
                id: 0,
                name:"",
                content:"",
                updateTime:"",
                creaTime:"",
            };
            // this.interviewtype = this.ites(scope.index);
            // this.ites.push(this.ites);    
        },
        del(scope) {
            console.log(scope+"               226")
            ElMessageBox.confirm('此操作将永久删除用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'

            }).then(()=>{
                console.log(1)

                const params = {
                    id: scope
                }



                articledelete(params).then(res => {
                    if (res.success) {
                        ElMessage.success("数据删除成功！");
                        this.getinterviewtypegetall();
                        this.getinterviewtypegetall(this.all.current)
                        //         this.dialogVisible = false;
                    } else {
                        ElMessage.error("数据删除失败！");
                        console.log(res.msg);
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员');
                    return false;

                })

            }).catch(()=>{
                console.log(2)
            });

           

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
</style>
