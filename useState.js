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
    return {
        val: initState,
        get value() {
            return this.val
        },
        set value(newVal) {
            this.val = newVal
            this.domUpdate()
        },
        domUpdate() {
            console.log('Dom Updated')
        }
    }
}

const state = useStateV2(1)

console.log(state.value)

state.value = 2

console.log(state.value)





















