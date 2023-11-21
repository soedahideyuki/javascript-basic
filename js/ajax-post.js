const url='https://jsonplaceholder.typicode.com/posts';
const button=document.getElementById('ajax-btn');

button.addEventListener('click',()=>{
  // ダミーデータの送信
  const dummyData={ name:'侍太郎',age:30};

  // ダミーサーバーにAjaxリクエストを送信する
  fetch(url,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(dummyData) //JSON形式に変換
  })
  .then((response)=>response.json())//JSON形式のデータに変換
  .then((data)=>{
    // サーバーから受け取ったダミーデータを見やすい形にして表示
    console.log('サーバーからの応答:\n'+JSON.stringify(data,null,2));
  });
});