const crBL = document.getElementById('cr__bl')
const but = document.getElementById('cr__bt')
const textArea = document.getElementById('t_a')
const buttRemove = document.getElementsByClassName('span__remove')
const keyInp = document.getElementsByClassName("keys")
const valInp = document.getElementsByClassName("values")

const  examination = () => Array.from(keyInp).every(elem => elem?.value?.length)

const transfer = () =>{
    const keyArr = Array.from(keyInp).map(elem => elem.value)
    const valArr = Array.from(valInp).map(elem => elem.value)
    const keysObject = {}

    for(let i=0; i<keyArr.length; i++){
        keysObject[keyArr[i]] = valArr[i];
    }

    textArea.value = JSON.stringify(keysObject, null, 2)
}

const removeField = (e) =>{
    e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode)
    transfer()
}

const createListeners = () => {   
    Array.from(buttRemove).forEach(elem => elem.addEventListener("click", removeField))
    Array.from(keyInp).forEach(elem => elem.addEventListener("change", transfer))
    Array.from(valInp).forEach(elem => elem.addEventListener("change", transfer))
}

createListeners()

const createInp = () => {
    if (examination()) {
        const inputNewElement = `
            <div class="key__val">
            <div class="line"></div>
            <div class = "input__box">
                <input type="text" placeholder="Key" class="keys">
                <button type="button" class="but__remove"><span class="span__remove">+</span></button>
                <input type="text" placeholder="Value" class="values">
            </div>
        </div>`

        crBL.insertAdjacentHTML('beforeend', inputNewElement)
    }

    createListeners()
}

but.addEventListener("click", createInp)