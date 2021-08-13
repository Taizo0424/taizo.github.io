let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/taizo/Desktop/初めてのwebページ　学習用/test-site/images/8197619669_0acbd48fb1_o.jpg') {
      myImage.setAttribute('src','/Users/taizo/Desktop/初めてのwebページ　学習用/test-site/images/firefox2.jpeg');
    } else {
      myImage.setAttribute('src','/Users/taizo/Desktop/初めてのwebページ　学習用/test-site/images/8197619669_0acbd48fb1_o.jpg');
    }
}
document.querySelector('html').onclick = function() {
    alert('痛っ! つつくのはやめて! あなたのうちに任天堂スイッチを送ります。');
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'wiiu はすばらしいよ、' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }  