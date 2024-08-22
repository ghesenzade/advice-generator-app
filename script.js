document.addEventListener('DOMContentLoaded', ()=>{
    let adviceId = document.getElementById('advice-id');
    let adviceText = document.querySelector('.advice-text');
    let newAdviceBtn = document.getElementById('new-advice');

    let fetchAdvice = () =>{
        fetch('https://api.adviceslip.com/advice')
            .then(response=>response.json())
            .then(data=>{
                adviceId.textContent = data.slip.id;
                adviceText.textContent = data.slip.advice;
            })
            .catch(error =>{
                console.error('error: ', error)
                }
            )         
    }
    newAdviceBtn.addEventListener('click', fetchAdvice);

    fetchAdvice();
})