function displayMessange(type, title, messenge, time){
 let block = document.createElement('div') ;
 block.classList.add('message-box');


 let content = document.createElement('div') ;
 content.classList.add('message-content');
 content.classList.add(type);

block.appendChild(content)

let head = document.createElement('div') ;
head.classList.add('message-head');
head.innerText = title;

let text = document.createElement('div') ;
text.classList.add('message-text');
text.innerText = messenge;

let time_line = document.createElement('div') ;
time_line.classList.add('message-time-line');


content.appendChild(head)
content.appendChild(text)
content.appendChild(time_line)



 document.body.appendChild(block);


time_line.style.width = '100%';
let difference = 1000/time;
let lineMove = setInterval(function(){
 time_line.style.width = `${Number(time_line.style.width.replace('%','')) - difference}$`
if(Number(time_line.style.width.replace('%','')) - difference < 1){
clearInterval(lineMove);
document.body.removeChild(block);
}
},10)


}
displayMessange('message-info', 'Text header', 'test text massage', 4000)