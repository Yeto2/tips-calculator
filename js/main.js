//* ------Declaration
const app = document.querySelector('.app');
let tips = document.querySelectorAll('.tips > *:not(:last-child)');
let amount = document.querySelector('.tip-am');
let total = document.querySelector('.total');
let bill = document.querySelector('#bill');
let custom = document.querySelector('#custom');
let persons = document.querySelector('#nbp');
let reset = document.querySelector('.reset');

// ----------

function func() {
let bv = bill.value 
let cust = custom.value
let pers = persons.value
amount.innerText = `${bv}`

tips.forEach(ele => {
    ele.addEventListener('click' , (e)=>{
        let pecentage = e.target.dataset.val
        if (pers) {
            amount.innerText = `${((bv * pecentage / 100)/pers).toFixed(2)}`
            total.innerText = `${((bv / pers) + +(amount.innerHTML)).toFixed(2)}`
        }else{
            amount.innerText = `${bv}`
        }
    })
});

//deal with custom input
if (cust && pers) {
    amount.innerText = `${((bv * cust / 100)/pers).toFixed(2)}`
    total.innerText = `${((bv / pers) + +(amount.innerHTML)).toFixed(2)}`
} else {
    amount.innerText = `${bv}`
}

//check if bill field has no value
if (bv === "") {
    amount.innerText="0.00"
}

}


    app.addEventListener('keyup' , func)
    //Reset button
    reset.addEventListener('click' , ()=>{
        bill.value =''
        custom.value =''
        amount.innerText='0.00'
        total.innerText='0.00'
    })












