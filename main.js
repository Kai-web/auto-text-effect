const text = document.getElementById('text');
const prog = '欢迎来到米修在线，感谢大家一直以来对我们对支持和鼓励！';

let index = 1;

function wirteText() {
  text.innerText = prog.slice(0, index);
  index++;

  if (index > prog.length) {
    index = 1;
  }
}

setInterval(wirteText, 300);
