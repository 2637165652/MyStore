
// var _object={
//     get:'pdd',
//     fun1(){
        
//         var self=this;
//         setTimeout(()=>{(function(){
//                 console.log('3:${this.get}');
//                 console.log('4:{this.get}');
//             }());
//         })
//         console.log('1:{this.get}');
//         console.log('2:{this.get}');
//     },
//     fun2(){
//         console.log('5:{this.get}');
//     }
// }
// _object.fun1();
// _object.fun2();

// var arr=[12,3,5,10];
// var arr2=arr.join('').split('');
// console.log(arr2);

// Javascript
// var N, M;
// // 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
// while ((N=readInt()) != null && (M=readInt()) != null) {
//   print (N + ' ' + M);
//   // 循环读取“接下来的M行”
//   for (let i=0; i<M; i++) {
//     let a = readInt();
//     let b = readInt();
//     let c = readInt();
//     // 每行是3个整数，a，b，c。
//     print(a + ' ' + b + ' ' + c);
//   }
//   // M行读取完了，就又要开始下一组了，去while那里。
// }


// var arr=read_line().split(' ');
// var n = parseInt(arr[0]);
// var m = parseInt(arr[1]);
// var k = parseInt(arr[2]);
// var arr=new Array(n*m);
// var index=0;
// for(let i=1;i<=n;i++)
// {     
//     for(let j=1;j<=m;j++)    
//     {          
//         arr[index++]=i*j;      
//     }
// }
// arr.sort();
// print(arr[k-1]);


// function isWP(num){
//     for(var i=1;i<=num;i++){
//         if(i*i==num){
//             return true;
//         }
//     }
//     return false;
// }
// function isPerfect(num)
// {
//     var sum1=0;
//     for(var i=1;i<=num;i++){
//         if(num%i==0){
//             sum1=sum1+i*i;
//         }
//     }
//     if(isWP(sum1)){
//         return true;
//     }else{
//         return false;
//     }
// }
// var n=100;
// var sum=0;
// for(var i=1;i<n;i++){
//     if(isPerfect(i)){
//         sum=sum+i;
//     }
// }
// console.log(sum);



// var n=readInt(),m=readInt();
// var arr=new Array();
// var index=0;
// for(var i=1;i<=n;i++){
//     for(var j=1;j<=m;j++){
//         arr[index++]=readInt();
//     }   
// }

// var arr2=new Array();
// for(var i=0;i<m;i++){
//     arr2[i]=new Array();
// }
// for(var i=0;i<m;i++){
//     index=i;
//     for(var j=0;j<n;j++){
//         arr2[i][j]=arr[index];
//         index=index+m;
//     }
// }
// for(var i=0;i<m;i++){
//     arr2[i].sort((a,b)=>{
//         return b-a;
//     })
// }
// var num=0;
// index=0;
// for(var i=0;i<n;i++){
//     for(var j=0;j<m;j++){
//         var oldindex=index;
//         if(arr[index++]==arr2[j][0]){
//             num++;
//             index=oldindex+m;
//             continue;
//         }
//     }
// }
// print(num);

//  //最短循环节
//  var a=2,b=1,m=55,x=3;
//  var len=0;
//  var arr3=new Array();
//  while(true){
//      x=(a*x+b)%m;
//      var str=arr3.join('-');
//      str='-'+str+'-';
//      if(str.indexOf('-'+x+'-')!=-1){
//          break;
//      }
//      arr3.push(x);
//      len++;
//  }
//  console.log(len);


// //2520是被1-10整除的最小正数，求最小的能被1-20整除的正数
// var mini=2520;
// var isFind=false;
// while(!isFind){
//     for(var i=1;i<=20;i++){
//         if(mini%i!=0){
//             mini++;
//             break;
//         }else if(mini%i==0&&i==20){
//             isFind=true;
//         }
//     }
// }
// console.log(mini);


//最大回文数：前后读一样的数。由两个3位数相乘得到的最大回文乘积
// var upper=99,lower=9;
// var isFind=false;
// for(var i=upper;i>lower;i--){
//     var str1=i.toString();
//     var str2=str1.split('').reverse().join('');
//     var result=parseInt(str1+str2);
//     for(var j=upper;j*j>result;j--){
//         if(result%j==0){
//             isFind=true;
//             break;
//         }
//     }
//     if(isFind){
//         console.log(result);
//         break;
//     }
// }

// //解析url参数
// var str='name=jack&age=18&rage=50&carrier=it&marriage=1';
// function parse(str){
//     if (typeof str !== 'string') return;
//     return str.split('&').reduce((acc, cur) => {
//         var [key, value] = cur.split('=');
//         // 如果不存在value，则不需要
//         if (!value) return acc;
//         acc[key] = value;
//         return acc;
//     }, {})
// }
// var obj=parse(str);  
// //obj={ name: 'jack', age: '18', rage: '50', carrier: 'it', marriage: '1' }
// var keys=[],k;
// for(k in obj){
//     if(obj.hasOwnProperty(k)){
//         keys.push(k);
//     }
// }   
// //keys=[ 'name', 'age', 'rage', 'carrier', 'marriage' ]
// keys.sort();
// var newObj={};
// var len=keys.length;
// for(var i=0;i<len;i++){
//     k=keys[i];
//     newObj[k]=obj[k];
// }
// console.log(newObj);

//每千位加','
// var num=1234567890;
// var arr=new Array();
// while(num!=0){
//     var temp=num%1000;
//     arr.unshift(temp);
//     //js除法‘/’不向下取整
//     num=Math.floor(num/1000);
// }
// console.log(arr.join(','));


// //2 4 3 1
// setTimeout(function(){
//     console.log(1)
// },0)
// new Promise((resove,reject) => {
//     console.log(2)
//     resove()
// }).then(function(){
//     console.log(3)
// })
// console.log(4)


//
// const obj = {
//     aaa() {
//         setTimeout(function () {  //函数调用是通过call，call会把window作为第一个参数传进去
//             console.log(this) //window
//         })

//         setTimeout(() => { //箭头函数没有自己的this，只会一层一层向外查找
//             console.log(this) //aaa obj对象
//         })
//     }
// }
// obj.aaa()



//     var name = "The Window";
//     var object = {
// 　　　　name : "My Object",
// 　　　　getNameFunc : function(){
// 　　　　　　return function(){
// 　　　　　　　　return this.name;
// 　　　　　　};
// 　　　　}
// 　　};
// 　　console.log(object.getNameFunc()()); //undefined why??

//     var name = "The Window";
//     var object = {
// 　　　　name : "My Object",
// 　　　　getNameFunc : function(){
// 　　　　　　var that = this;
// 　　　　　　return function(){
// 　　　　　　　　return that.name;
// 　　　　　　};
// 　　　　}
// 　　};
// 　　console.log(object.getNameFunc()()); //My object




// a=b=1;
// (function(){
//     console.log(a+','+this.b);  //undefined,1
//     var a=2;
// })()


// function f(){}
// var a=f.prototype,b=Object.getPrototypeOf(f);
// console.log(a===b); //false


// var A={v:1},a=2;
// (function(A,a){
//     A.v=3;a=A.v;
// })(A,a);
// console.log(a,A.v); //2 3


// const obj = {
//     aaa() {
//         setTimeout(function () {  //函数调用是通过call，call会把window作为第一个参数传进去
//             console.log(this) //window
//         })

//         setTimeout(() => { //箭头函数没有自己的this，只会一层一层向外查找
//             console.log(this) //aaa obj对象
//         })
//         console.log(this)  //aaa
//     }
// }
// obj.aaa()

// function f(){
//     var a=3;
// }
// // console.log(a);  //报错 undefined
// let b=4;
// (function f2(c,d){
    
//     console.log(b,c,d);
// })(2,3)

var c1="曹";
var c2="操";
console.log(c1+c2);


