// アロー関数
const sayGoodMorning=()=>{
  console.log('おはようございます');
  console.log('昨日はよく眠れましたか？');
  console.log('今日も一日頑張りましょう');
}

const sayGoodEvening=()=>{
  console.log('こんばんは');
  console.log('今日も一日お疲れ様でした');
}

// 関数の呼び出し
sayGoodMorning();
sayGoodEvening();

//引数（price）に送料を加算して出力を定義
const caculateTotal=(price)=>{
  console.log(price+500+'円');
}

// 引数の呼び出し
caculateTotal(1200);

// 引数が２つ以上（price,shippingFee）の場合
const addTwoArguments=(price,shippingFee)=>{
  console.log(price+shippingFee+'円');
}

addTwoArguments(1200,500);

addTwoArguments(1200,200);

// returnを使って戻り値を出力する
const double=(num)=>{
  return num*2;
}

console.log(double(Math.floor(Math.random()*30)))


const useVariable=()=>{
  const userName='侍太郎'
  console.log(userName);
}

useVariable();

console.log(userName);