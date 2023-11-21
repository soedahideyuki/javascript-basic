const url='https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';
const button=document.getElementById('ajax-btn')

button.addEventListener('click',()=>{
  // 気象庁のWebサイトにリクエストを送信し、天気予報データを取得する
  fetch(url)
  // サーバーからAjaxレスポンスを受け取った時の処理
  .then((response)=>response.json())    //JSON形式のデータに変換
  .then((data)=>{
    // JSONデータから「東京の明日の天気」を抽出して表示
    const weather=data[0].timeSeries[0].areas[0].weathers[1];
    console.log('東京の明日の天気:'+ weather);
  }) ;
});