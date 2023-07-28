let userHeight= 160;
let userWeight= 70;
let normal_w = 0;
const heightInput = document.querySelector('#height_input')
const weightInput = document.querySelector('#weight_input')
const result = document.querySelector('.result')
const resultBtn = document.querySelector('#result_btn')
const resetBtn =document.querySelector('#reset_btn')
console.log(userHeight, userWeight, normal_w)
console.log(heightInput, weightInput, result, resultBtn, resetBtn)
resultBtn.addEventListener('click',function(){
    normal_w = (userHeight-100)*0.9
    result.innerHTML=`적정체중은 ${normal_w}이며 ${userWeight-normal_w}초과되셨습니다.`
})
resetBtn.addEventListener('click', function() {
    heightInput.value = '';
    weightInput.value = '';
    result.innerHTML= '';
})