// UseState V1
function useStateV1(initValue) {
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

// const [count, updateCount] = useStateV1(1)
//
// console.log(count.value)
//
// updateCount(2)
//
// console.log(count.value)

// useState V2

function useStateV2(initState) {
    let internalValue = initState
    const domUpdate = () => {
        console.log('Dom Updated')
    }
    return {
        get value() {
            return internalValue
        },
        set value(newVal) {
        internalValue = newVal
            domUpdate()
        }
    }
}

const state = useStateV2(1)

console.log(state.value)

state.value = 2

console.log(state.value)





















