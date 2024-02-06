const form = document.querySelector("form")
form.addEventListener('submit', function(e){
    e.preventDefault()
    const weight = parseInt( document.querySelector("#weight").value);
    let height =  parseInt( document.querySelector("#height").value);
    const result = document.querySelector("#result")
    let h = (height * height)
    console.log(h)
    const BMI = weight /(1.72 * 1.72) 
    result.innerHTML =  `Your BMI is ${(weight/(((height * height)/10000))).toFixed(2)}`;
    
    
})
    e

