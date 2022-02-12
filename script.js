let loadText=document.querySelector('.load-text');
let loadName=document.querySelector('.load-name');
let bg=document.querySelector('.bg');

let load=0;
let stop=setInterval(blurring,50);

function blurring(){
    load++;

    if(load>99)
    clearInterval(stop);
    loadText.innerHTML=`${load}%`;
    loadText.style.opacity=scale(load,0,100,1,0);
    loadName.style.opacity=scale(load,0,100,0,1);
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`;                                        
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

