let dan2 = 2;
const danBtn2 = document.querySelector('.danbtn_2')
const danresult = document.querySelector('#dan_2_wrap')
const result = document.querySelectorAll('.result')
const answer = document.querySelector('.answer')
console.log(dan2, danBtn2, danresult, result , answer )
danBtn2.addEventListener('click',function(){
    danresult.style.display = 'block';
})
answer.addEventListener('click', function(){
    result[0].value=2*1
    result[1].value=2*2
    result[2].value=2*3
    result[3].value=2*4
    result[4].value=2*5
    result[5].value=2*6
    result[6].value=2*7
    result[7].value=2*8
    result[8].value=2*9
})