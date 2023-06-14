
import instance from "./axios";
const userLogin=(data)=>{
    //返回Promise对象
   return instance.request({
        url:'api/mobile/elogin', //fullpath=baseURL+url  http://api.jqrjq.cn/api/mobile/elogin
        method:'post',
        data,
      
    })
}
const adminLogin=(data)=>{
   return instance.request({
    url:'', //url=baseURL+url
        method:'post',
        data
   })
}
const articlegetall =(params)=> {
    console.log(params)
    return instance.request({
        url:'api/article/all',
        method:'get',
        params,
    })

}
const articleadd=(data)=>{
    
    return instance.request({
        url:'api/article/add',
        method:'post',
        data,
    })
}
const articleedit=(data)=>{
    return instance.request({
        url:'api/article/edit',
        method:'post',
        data,
    })
}
const articledelete =(params)=>{
    return instance.request({
        url:'api/article/delete',
        method:'get',
        params,
    })
}
const interviewtypegetone = (params)=>{
    return instance.request({
        url:'api/interviewType/one',
        method:'get',
        params
    })
}

export {
    articlegetall,
    articleadd,
    articleedit,
    articledelete,
    userLogin,
    adminLogin,
    interviewtypegetone
}