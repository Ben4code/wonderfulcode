
document.querySelector('.next').addEventListener('click', ()=>{
    fibonacci();
})

function fibonacci(reset) {
    //If reset is true - reset to the first fibonacci number
    let currentSequence = [];
    if(reset !== undefined && reset === true) currentSequence = [0];

    return function(){
        let latestSum = 0;
        if(currentSequence.length != 0){
            latestSum = currentSequence.reduce((total, number) => total += number)
        } 
        currentSequence.push(latestSum);
        return currentSequence[currentSequence - 1];
    }();
}

document.getElementById('value').innerHTML = fibonacci();