const button = document.createElement('button')

button.innerText = 'Can you click me?'


button.addEventListener('click', () => {
    alert('Give me a 100... Just Kidding XD')
})

document.body.appendChild(button)