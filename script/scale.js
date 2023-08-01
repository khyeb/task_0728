const heightInput = document.querySelector('#height_input')
const weightInput = document.querySelector('#weight_input')
const result = document.querySelector('.result')
const resultBtn = document.querySelector('#result_btn')
const resetBtn =document.querySelector('#reset_btn')
console.log(heightInput, weightInput)
console.log(result, resultBtn, resetBtn)
resultBtn.addEventListener('click',function(){
    let userHeight = Number(heightInput.value) //str > number
    let userweight = Number(weightInput.value)
    console.log(userHeight,userweight)
    normal_w = (userHeight-100)*0.9
    result.innerHTML=`적정체중은 ${normal_w}kg이며 ${userweight-normal_w}kg 초과되셨습니다.`
})
resetBtn.addEventListener('click', function() {
    heightInput.value = '';
    weightInput.value = '';
    result.innerHTML= '';
})