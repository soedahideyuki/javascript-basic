console.log('処理１');
console.log('処理Ⅱ');
console.log('処理Ⅲ');

setTimeout(()=>{
  console.log('処理4（非同期処理）');
},2000);

console.log('処理5');
console.log('処理6');