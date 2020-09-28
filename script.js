const form = document.querySelector('#parking-form')
let formIsValid
// let word
// let wordLengths
// let cvv
// let cvvArray
// let cvvLength
let total
let resDays
let parkingFee
let parkingFeeResult

form.addEventListener('submit', validateForm)

function validateForm (event) {
    event.preventDefault()
    removeErrorMessage()
    formIsValid = true

function validateCardNumber(number) {
        var regex = new RegExp("^[0-9]{16}$");
        if (!regex.test(number))
            return false;
    
        return luhnCheck(number);
    }
    
function luhnCheck(val) {
        var sum = 0;
        for (var i = 0; i < val.length; i++) {
            var intVal = parseInt(val.substr(i, 1));
            if (i % 2 == 0) {
                intVal *= 2;
                if (intVal > 9) {
                    intVal = 1 + (intVal % 10);
                }
            }
            sum += intVal;
        }
        return (sum % 10) == 0;
    }

    if (formIsValid) {
        let total = document.querySelector('#total')
        let parkingFee = document.createElement('p')
        let resDays = document.querySelector('#days').value
        let parkingFeeResult = (resDays*5)
            console.log(parkingFeeResult)
        parkingFee.innerText = 'The total for your stay is $' + parkingFeeResult
        total.appendChild(parkingFee)

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
   
//#5 id start date, id # of days staying, 
//id which days are during the week/weekend
//multiply 5|7 depending and sum

}

function removeErrorMessage () {
    const errorDiv = document.querySelector('#error-msg')
    if (errorDiv) {
        errorDiv.innerHTML = ''
    }
}





// // cvv type to text so string works
// //pattern won't work?
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