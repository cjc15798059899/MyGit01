var target={
    name:"李四",
    age:23,
    sex:'男'
}

var val={
    name(name){
        if(typeof(name)=="string" && name.length<10)
        return true;
        return false;
    },
    age(age){
        if(typeof(age)!="number")
            return false;
            if(age>0 && age<150) return true;
            return  false;
    },
    sex(sex){
        if(typeof (sex)=="string" && sex.length==1)
        return true;
        return false;
    }

}

function Validate (target,val){
    return new Proxy(target,{
        _Val:val,
        set:function(target,prop,value){
            if(target.hasOwnProperty(prop)){
                var m=this._Val[prop];
                m1=m(prop);
                if(m1){
                    target[prop]=value;
                    return m1
                }else{
                    console.log('该值设置不符合条件')
                }

            }else{
                console.log('这个对象不存在该属性!')
            }
        },
        get(target,prop){
           if(target.hasOwnProperty(prop))return target[prop]
           return '不存在该属性';
        }
    })
}

// var t=new Validate(target,val)
// console.log(t.name)

function Person (){
    this.name='zs';
    this.age=25;
    this.sex='女'
    return new Validate(this,val)
}

var p=new Person();
console.log(p.name);