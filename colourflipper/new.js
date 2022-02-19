const btn=document.querySelector('button');
// const color=["#b743de","#a53f3f","#3f97a5","#32a852","#8ec1de"];
const number="ABCDEF1234567890"
const span=document.querySelector('.text');
const color=[...number];
const clr=["RED","blue","#aafff","grey","#06C850"];


    btn.addEventListener('click',function()
    {
        let random="#"+color[ran()]+color[ran()]+color[ran()]+color[ran()]+color[ran()]+color[ran()];
        document.body.style.backgroundColor=random;
        span.innerText=random;
        console.log(random);
    })


function ran()
{
    return Math.floor(Math.random()*color.length);
}
function ran2()
{
    return Math.floor(Math.random()*clr.length);
}
