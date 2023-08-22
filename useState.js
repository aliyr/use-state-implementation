
function useState(initValue) {
    let value = {
        value: initValue
    }
    const updateValue = function (val) {
        value.value = val
    }
    return [
        value,
        updateValue
    ]
}

const [state, updateState] = useState(1)

console.log(state.value)

updateState(2)

console.log(state.value)