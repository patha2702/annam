const findItem = (itemArr, itemId) => {
    let itemIndex = -1
    itemArr.filter((item, index) => {
        if (item.id === itemId) {
            itemIndex = index
            return
        }
    })
    return itemIndex
}

export default findItem