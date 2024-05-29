let input = document.querySelector('.input')
let button= document.querySelector('.button')
let result=document.querySelector('.result')




button.addEventListener('click' , ()=>{
   if(input.value==''){alert('you cant put nothing here')
}
else{
    for(let f = 1; f < 11; f++){
    result.innerHTML +='<br>'+ '<br>'+ input.value + ' x ' + f + ' = '+ input.value*f + '<br>'
   }
    }
})