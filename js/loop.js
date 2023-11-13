// 変数numに0~4までのランダムな整数を代入する
let num = Math.floor(Math.random()*5);

console.log(num);

// 変数numの値が0以外である間、変数numの値を出力し続ける
while(num!==0){
  num=Math.floor(Math.random()*5);
  console.log(num);
}

// 1~10までの数値を順番に出力する
for(let i=1; i <= 10;i+=1){
  console.log(i);
}

const holidays=['文化の日','建国記念日','みどりの日','こどもの日','昭和の日','建国記念日'];

console.log(holidays[2]);

for(let i=0;i<5;i++){
  console.log(holidays[i]);
}