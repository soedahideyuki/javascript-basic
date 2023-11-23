// クッキーを取得する
const getCookie=(name)=>{
  // 「;」で区切り、個々のクッキーを配列で取得
  const cookis=document.cookie.split(';');
  // クッキーをfor文１つずつチェック
  for(let i=0;i<cookis.length;i++){
    // 「=」でクッキーを分割して、クッキー名と値を取得
    const [cookieName,value]=cookis[i].trim().split('=');
    // クッキー名が一致したら、その値をデコードしてreturn

    if(cookieName===name){
    return decodeURIComponent(value);
    }
  }
  return '';
};

// クッキーを取得して画面に表示
document.getElementById('output').textContent='name='+getCookie('name')+'age='+getCookie('age');

// クッキーの作成
document.cookie='name='+encodeURIComponent('侍太郎')+'; max-age=60*60';
document.cookie='age=30;max-age=60*60';