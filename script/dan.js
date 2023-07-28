let dan2 = 2;
const danBtn2 = document.querySelector('.danbtn_2')
const result = document.querySelector('#result')
console.log(dan2, danBtn2, result)
danBtn2.addEventListener('click',function(){
    result.style.display = 'block';
    result.innerHTML=`2X1=${dan2*1}<br>2X2=${dan2*2}<br>2X3=${dan2*3}<br>2X4=${dan2*4}<br>2X5=${dan2*5}<br>2X6=${dan2*6}<br>2X7=${dan2*7}<br>2X8=${dan2*8}<br>2X9=${dan2*9}`
})