var obj={
    name:"李四",
    age:23,
    sex:'男'
}

    obj[Symbol.iterator]=function(){
            var _this=this
            var n=0;
            var res={
                next:function(){
                    var keys=Object.keys(_this);
                    if(n<keys.length){
                        return {value:_this[keys[n++]],done:false}
                    }else{
                        return {done:true}
                    }
                }
            }
       return res;
   }

for(let s of obj){
    console.log(s)
}


// var   obj  ={     
//     name:'zs',
//     age:19,
//     length:2   // 显示告诉程序员 这个对象属性只有两个
// }    // 目前无法通过for of循环来访问对象obj
// obj[Symbol.iterator]=function(){
//     // 将 obj 保存起来
//                  var _this = this
//                  var n = 0;  // 给对象新增一个 方法
//         var res = {  // 这个被返回的对象 里面一定要包含一个 next 函数
//                  next:function(){
//                     var keys = Object.keys(_this);
//                  if(n<_this.length){
//                      return {value:_this[keys[n++]],done:false}
//                  }
//                 else{
//                     return {done:true}
//                 }
//             }
//         }
//         return res;
// }
// for(let a of  obj){
//     console.log(a+"----")
// }
