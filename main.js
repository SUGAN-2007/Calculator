let display = document.getElementById('display')

const app = (a) => {
    display.value += a

}
const calc = () => {
    try {
        display.value = eval(display.value)
    }
    catch (error) {
        display.value = "Math error"
    }
}

const clr = () => {
    display.value = ''
}

const spc = () => {
    display.value = display.value  + " "
}