export const sortData = (data , sortKey)=>{
    switch (sortKey.key) {
        case 'name':
        case 'title':
        case 'field':
            if(sortKey.operation === "desc"){
                sortByStringDesc(data, sortKey.key)
            }
            else {
                sortByStringAsyc(data, sortKey.key)
            }
            break;
        case 'date':
            if(sortKey.operation === "desc"){
                sortByDateDesc(data, sortKey.key)
            }
            else {
                sortByDateAsyc(data, sortKey.key)
            }
            break;
        default:
            break;
    }
}

const sortByStringDesc = (data, key)=>{
    data.sort((a, b)=>{
        if(a[key] > b[key])
            return 1;
        return -1
    })
}

const sortByStringAsyc = (data, key)=>{
    data.sort((a, b)=>{
        if(a[key] > b[key])
            return -1;
        return 1
    })
}


const sortByDateDesc = (data, key)=>{
    data.sort((a, b)=>{
        if(a[key] > b[key])
            return -1;
        return 1
    })
}
const sortByDateAsyc = (data, key)=>{
    data.sort((a, b)=>{
        if(a[key] > b[key])
            return 1;
        return -1
    })
}

export const filterData = (data , params)=>{
    params.forEach((filter)=>{
        if(filter.value){
            switch (filter.type) {
                case 'string':
                    data= data.filter(item=>item[filter.key].includes(filter.value))
                    break;
                case 'select':
                    data= data.filter( item=>item[filter.key] === filter.value)
                    break;
                default:
                    break;
            }
        }
    })
    return data;
}

export const createBTSData = (data)=> {
    let BSTData = [];
    if(data && data[0]) {
        sortData(data, {key: 'date', operation: 'asyc'})
        let date = "";
        let index = -1;
        data.forEach((item) => {
            if (date === item.date) {
                BSTData[index].items.push(item)
            } else {
                index++;
                date = item.date;
                BSTData[index] = {date: item.date, items: [item]}
            }
        })
    }
    return BSTData;
}

export const dateFilter = (BSTData, date , params, sortKey)=>{
    let start = 0;
    let end = BSTData.length-1;
    let active = true;
    let index = Math.floor((start + end) /2);
    while ( start <= end){
        index = Math.floor((start + end) /2);
        if(BSTData[index].date === date){
            break;
        }
        else {
            if(BSTData[index].date > date){
                end = index-1;
            }
            else {
                start = index+1;
            }
        }
    }
    let data = active ? [] : filterData(BSTData[index].items , params, );
    if (sortKey){
        return sortData(data, sortKey)
    }
    else {
        return data;
    }
}
