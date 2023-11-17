console.log(document.head);
console.log(document.body);

console.log(document.getElementById('first-list'));

console.log(document.getElementsByClassName('heading'))

const headings=document.getElementsByClassName('heading');

for(let i=0;i<headings.length;i++){
  console.log(headings[i]);
}
// １つ目のセレクタを出力する
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

// 全てのセレクタを出力する
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

const cssHeadings=document.querySelectorAll('.heading');
const cssLists=document.querySelectorAll('li');

for(let i=0;i<cssHeadings.length;i++){
  console.log(cssHeadings[i]);
}
for(let i=0;i<cssLists.length;i++){
  console.log(cssLists[i]);
}

const li=document.createElement('li');

li.textContent='JavaScriptで新しく作成したリスト3';

document.querySelector('ul').appendChild(li);