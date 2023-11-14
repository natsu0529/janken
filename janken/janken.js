const dai=document.querySelector('#gu')
const chu=document.querySelector('#cho')
const kyo=document.querySelector('#pa')


let x=0;



const min = 1 ;
const max = 3 ;

let a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
console.log(a)

if(a===1){gu.setAttribute('id','selected');}
if(a===2){cho.setAttribute('id','selected');}
if(a===3){pa.setAttribute('id','selected');}


const pus1 = document.querySelectorAll('button')[0]
const pus2 = document.querySelectorAll('button')[1]
const pus3 = document.querySelectorAll('button')[2]
const result = document.querySelector('#selected')

pus1.addEventListener("click", () => {
    result.classList.remove('hidden')
    ;x+=1;



    if(x===a){
        setTimeout(()=>{alert('あいこ')},1000);}
if((x===1 && a===2)||(x===2 && a===3)||(x===3 && a===1)){

    setTimeout(()=>{alert('勝ち')},1000);}


    if((a===1 && x===2)||(a===2 && x===3)||(a===3 && x===1)){

        setTimeout(()=>{alert('負け')},1000);
}


     
})

pus2.addEventListener("click", () => {
    result.classList.remove('hidden')
    ;x+=2;


    if(x===a){
        setTimeout(()=>{alert('あいこ')},1000);}
if((x===1 && a===2)||(x===2 && a===3)||(x===3 && a===1)){

    setTimeout(()=>{alert('勝ち')},1000);}


    if((a===1 && x===2)||(a===2 && x===3)||(a===3 && x===1)){

        setTimeout(()=>{alert('負け')},1000);
}

     

})

pus3.addEventListener("click", () => {
    result.classList.remove('hidden')
    
    ;x+=3;
    
    
    
    if(x===a){
        setTimeout(()=>{alert('あいこ')},1000);}
if((x===1 && a===2)||(x===2 && a===3)||(x===3 && a===1)){

    setTimeout(()=>{alert('勝ち')},1000);}


    if((a===1 && x===2)||(a===2 && x===3)||(a===3 && x===1)){

        setTimeout(()=>{alert('負け')},1000);
}

    
     


})




console.log(x)

