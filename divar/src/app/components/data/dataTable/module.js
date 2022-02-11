export const sortData = (data , sortKey)=>{
    console.log('data sort ing')
    if(sortKey.operation === 'none'){
        return data;
    }
    switch (sortKey.key) {
        case 'firstName':
        case 'lastName':
            if(sortKey.operation === "desc"){
                return sortByStringDesc(data, sortKey.key)
            }
            else {
                return sortByStringAsyc(data, sortKey.key)
            }
        case 'data':
            if(sortKey.operation === "desc"){
                return sortByDateDesc(data, sortKey.key)
            }
            else {
                return sortByDateAsyc(data, sortKey.key)
            }
        default:
            return data
    }
}

const sortByStringDesc = (data, key)=>{
    return data.sort((a, b)=>{
        if(a[key] > b[key])
            return 1;
        return -1
    })
}

const sortByStringAsyc = (data, key)=>{
    return data.sort((a, b)=>{
        if(a[key] > b[key])
            return -1;
        return 1
    })
}


const sortByDateDesc = (data, key)=>{
    return data.sort((a, b)=>{
        if(a[key] > b[key])
            return -1;
        return 1
    })
}
const sortByDateAsyc = (data, key)=>{
    return data.sort((a, b)=>{
        if(a[key] > b[key])
            return -1;
        return 1
    })
}
