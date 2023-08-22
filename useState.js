
function useState(initValue) {
    let internalValue = {
        value: initValue
    }
    const updateDom = () => {
        console.log('DOM Updated!')
    }
    const updateValue = function (val) {
        internalValue.value = val
        updateDom()
    }
    return [
        internalValue,
        updateValue
    ]
}

const [state, updateState] = useState(1)

console.log(state.value)

updateState(2)

console.log(state.value)