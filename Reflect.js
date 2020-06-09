// var obj={};
// Reflect.set(obj,"pname","海带");
// var r=Reflect.get(obj,"pname")
// console.log(r);

// function OneClass(){
//     this.name='one';
// }
// function OtherClass() {
//     this.name = 'other';
// }

// var obj1=Reflect.construct(OneClass,OtherClass);

// var obj2=Object.create(OtherClass.prototype);

// OneClass.apply(obj2);

// console.log(obj1.name);
// console.log(obj2.name);

var obj = {};
Reflect.set(obj); // true
var r=Reflect.getOwnPropertyDescriptor(obj, "undefined");
console.log(r);