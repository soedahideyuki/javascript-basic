const button=document.getElementById('check-btn');
button.addEventListener('click',validation);

// バリデーションを行う関数
// 質問
const validation=()=>{
  // Formにおける各要素の値を取得
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const output=document.getElementById('output');
  // エラーメッセージを格納する配列（最初は空）
  let errors=[];
  // お名前のバリデーション
  if(name.trim()===''){   //空欄だった場合
     errors.push('お名前を入力してください。');
  }
  else if(name.length>10){  //名前が１０文字以上だった場合
     errors.push('お名前が10文字を超えています。');
  }

  // メールアドレスのバリデーション（使える記号は.と@のみ）
  const emailPattern=/^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+$/;
  if(!emailPattern.test(email)){  //e-mailパターンから逸脱しているもの
    errors.push('メールアドレスの入力形式が正しくありません。');
  }

  // エラーがあれば画面に表示
  if(errors.length>0){  //もしエラーの文字数が0文字より多かったら
    // 配列を改行区切りの文字列に変換して画面に表示
    output.textContent=errors.join('<br>');
  }
  else{
    output.textContent='';//エラーメッセージをクリア
    alert('バリテーションOKです');
  }
}