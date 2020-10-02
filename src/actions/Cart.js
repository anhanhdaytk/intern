
export const inCreMent = (item) => {
    return{
        type: 'INCREMENT',
        payload: item
    }
}
export const deCreMent = (item) =>{
    return{
        type: 'DECREMENT',
        payload: item,
    }
}
export const remove = (item) =>{
    return{
        type: 'REMOVE',
        payload: item
    }
}
// add cart
export const addcart = (index)  => {
    return{
        type: 'ADDCART',
        payload: index
    }
}
