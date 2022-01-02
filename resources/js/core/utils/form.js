import mapValues from 'lodash/mapValues'
import { useToast } from 'vue-toastification'

const toast = useToast()

export function assignErrors(errors){
    return mapValues(errors, (errorArray) => {
        return errorArray.join(" ")
    })
}

export function handleErrors(data){
    const toReturn = data.errors ? assignErrors(data.errors) : {}

    if(Object.keys(toReturn).length) {
        if (toReturn.message) {
            toast.error(toReturn.message)
        }
        return toReturn
    }

    if (data.message) {
        toast.error(data.message)
    }

    return toReturn
}

export function getErrors(e) {
    return Object.assign({}, handleErrors(e))
}
