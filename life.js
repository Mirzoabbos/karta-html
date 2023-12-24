
let ThanksPage = 
`
<div class="last-con">
<svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
<h2 class="last-header">Thank You</h2>
<p class="last-massage">We've added your cart details</p>
<button class="last-btn">Continue</button>  
</div>
`

const userName = document.getElementById('userName');
const userNum = document.getElementById('userNumber')
const month = document.getElementById('monthIn');
const year = document.getElementById('yearIn');
const cvc = document.getElementById('cvc');
const btn = document.querySelector('#confirm');


function checkBlank() {
    let firstError = document.querySelector('#f-error')
    let secondError = document.querySelector('#s-error')
    let thirdError = document.querySelector('#t-error');

    if(year.value === "") {
        thirdError.classList.replace( 'primary-error','second-error')
        secondError.classList.replace('primary-error' , 'second-error')
        month.classList.add('secondary-red')
        year.classList.add('secondary-red')
        cvc.classList.add('third-red')
        console.log(year.value)
    }else{
        console.log('not selected')
        document.querySelector('.right-side').innerHTML = ThanksPage;
        
        
    }

}

btn.addEventListener('click' , () => {
    console.log('hi')
    checkBlank()
    checkStr()
    separateEveryFourCharacters(input)
    
    
})


function checkStr() {
    let regex = /^[a-zA-Z]+$/; 
    if(regex.test(userNum.value)) {
        console.log("contains alphabet")
    }else{
        console.log('false')
    }
}

function separateEveryFourElement() {
    var input = document.getElementById('userNumber');


    input.addEventListener('input', function(e) {
    
    var value = e.target.value.replace(/\s/g, '');

    
    var newValue = value.replace(/(.{4})/g, '$1 ');

    
    e.target.value = newValue;
    });
}

separateEveryFourElement();


function containsAlphabet() {
    let character = document.getElementById('userNumber')

    character.addEventListener('input' , function(e) {
        let value = e.target.value;

        let containsAlphabet = /[a-zA-Z]/.test(value);

        if(containsAlphabet) {
            document.getElementById('f-error').classList.replace('primary-error' , 'first-error')
            console.log('it works')
        }else{
            console.log('it is ok')
            document.querySelector('.printNum').innerHTML= userNum.value;
            document.getElementById('f-error').classList.replace('first-error' , 'primary-error')


        }
    })
}

function fillTheName() {
    document.querySelector('.userName').innerHTML = userName.value;
}

function fillTheDate() {
    document.querySelector('.date').innerHTML = month.value
    
}

function fillTheYear() {
    document.querySelector('#dateY').innerHTML = year.value
}

function fillCvC() {
    document.querySelector('.backC-p').innerHTML = cvc.value
    
}
