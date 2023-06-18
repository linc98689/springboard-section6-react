/**
 * returns a randomly selected item from array of items
 */
const choice = (items)=>{
    let randIdx = Math.floor(Math.random() * items.length);
    return items[randIdx];
}

/**
 * removes the first matching item from items, 
 * if item exists, and returns it. Otherwise returns undefined
 */
const remove = (items, item)=>{
    let idx = items.indexOf(item);
    if (idx === -1)// not found
        return undefined;
    else{
        let removedItem = items[idx];
        items.splice(idx, 1);
        return removedItem;
    }
}

export {choice, remove};