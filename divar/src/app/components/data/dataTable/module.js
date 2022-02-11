export const sortData = (data , sortKey)=>{
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

export const filterData = (data , filter)=>{
    if(filter.value){
        switch (filter.type) {
            case 'string':
                return data.filter(item=>item[filter.key].includes(filter.value))
            case 'data':
                return data.filter( item=>item[filter.key] >=(filter.value[0]) && item[filter.key]  <= (filter.value[1]) )
            case 'select':
                return data.filter( item=>item[filter.key] === filter.value)
            default:
                return data
        }
    }
    return data;
}
