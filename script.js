const form = document.querySelector('#parking-form')
let formIsValid
let word
let wordLengths
let cvv
let cvvArray
let cvvLength

form.addEventListener('submit', validateForm)

function validateForm (event) {
    event.preventDefault()
    removeErrorMessage()
    formIsValid = true

// pattern won't work?
// //using string length so numbers won't work? parse?
// let cvv = document.querySelector('#cvv').value
//     console.log(cvv)
// let cvvArray = [cvv]
// let cvvLength = []
// for (let word of cvvArray) {
//     wordLengths.push(word.length)
//     console.log(wordLengths)
//     if (wordLengths !== 3) {
//         const errorDiv = document.querySelector('.error')
//             errorDiv.innerHTML = 'Your CVV must be 3 digits'
//             cvv.parentElement.classList.add('input-invalid')
//             formIsValid = false
//     }
// }   

    if (formIsValid) {
        fetch('https://momentum-server.glitch.me/parking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formData: { name: name }})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            // Update the DOM with a message to the user that the form was submitted.
        })
    }
        let total = document.querySelector('#total')
        let parkingFee = document.createElement('p')
        // parkingFee.innerText = # of days * 5. array of days 
}

function removeErrorMessage () {
    const errorDiv = document.querySelector('#error-msg')
    if (errorDiv) {
        errorDiv.innerHTML = ''
    }
}
