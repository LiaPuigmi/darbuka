const btn1=document.getElementById('btn1') as HTMLInputElement;
const btn2=document.getElementById('btn2') as HTMLInputElement;
const btn3=document.getElementById('btn3') as HTMLInputElement;
const btn4=document.getElementById('btn4') as HTMLInputElement;
const btn5=document.getElementById('btn5') as HTMLInputElement;

let firstBtn: HTMLAudioElement = new Audio('./sounds/Darbuka_66_76_SP.mp3');
firstBtn.autoplay=false;
firstBtn.controls=false;
firstBtn.loop=false;
document.body.appendChild(firstBtn);
let secondBtn: HTMLAudioElement = new Audio('./sounds/Darbuka_06_76_SP.mp3');
secondBtn.autoplay=false;
secondBtn.controls=false;
secondBtn.loop=false;
document.body.appendChild(secondBtn);
let thirdBtn: HTMLAudioElement = new Audio('./sounds/Darbuka_105_76_SP.mp3');
thirdBtn.autoplay=false;
thirdBtn.controls=false;
thirdBtn.loop=false;
document.body.appendChild(thirdBtn);
let fourBtn: HTMLAudioElement = new Audio('./sounds/Darbuka_130_76_SP.mp3');
fourBtn.autoplay=false;
fourBtn.controls=false;
fourBtn.loop=false;
document.body.appendChild(fourBtn);
let fiveBtn: HTMLAudioElement = new Audio('./sounds/Darbuka_42_76_SP.mp3');
fiveBtn.autoplay=false;
fiveBtn.controls=false;
fiveBtn.loop=false;
document.body.appendChild(fiveBtn);


btn1.addEventListener('click', () =>{
    firstBtn.load();
    firstBtn.play();
});

btn2.addEventListener('click', () =>{
    secondBtn.load();
    secondBtn.play();
});

btn3.addEventListener('click', () =>{
    thirdBtn.load();
    thirdBtn.play();
});

btn4.addEventListener('click', () =>{
    fourBtn.load();
    fourBtn.play();
});

btn5.addEventListener('click', () =>{
    fiveBtn.load();
    fiveBtn.play();
});