import React, {Component} from 'react';
import PropTypes from "prop-types";
import Table from "../../table/Table";
import TablePagination from "./common/TablePagination";
import {sortData, filterData, createBTSData, dateFilter,} from "./module";
import Filters from "./common/Filters";

class DataTable extends Component {
    static propTypes={
        columns: PropTypes.array,
        filters: PropTypes.array,
        data: PropTypes.array,
        limits: PropTypes.array,
        defaultLimit: PropTypes.number,
    }
    static defaultProps={
        columns: [],
        filters: [],
        data: [],
        limits: [5, 10, 20, 50 ],
        defaultLimit: 10,
    }
    constructor(props) {
        super(props);
        this.state={
            limit: props.defaultLimit,
            page: 1,
            data: props.data,
            params: [],
            BSTData : [],
        }
    }

    componentDidMount() {
        this.setState({BSTData : createBTSData(this.props.data)})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.defaultLimit !== prevProps.defaultLimit){
            this.onChangeLimit(this.props.defaultLimit)
        }
    }

    onChangeLimit = (newLimit)=>{
        this.setState({limit: newLimit})
    }

    addSort = (key , operation)=>{
        this.setState({sortKey:{key, operation} }, ()=>{
            if(operation === 'none'){
                this.createData(this.props.data, this.state.params, undefined)
            }
            else {
                this.createData(this.state.data, undefined, this.state.sortKey)
            }
        });
    }

    addFilter = (key, type, value, cb) =>{
        let {params} = this.state;
        let newParams = [...params]
        let newParam = {key, value, type};
        let findIndex = newParams.findIndex((param)=>param.key === key && type === type)
        if(findIndex > -1){
            newParams.splice(findIndex, 1);
        }
        if(value){
            newParams.push(newParam)
        }
        this.setState({params: newParams}, cb);
    }

    onFilter = ()=>{
        this.createData(this.props.data , this.state.params, this.state.sortKey);
    }

    createData= (data, params , sortKey)=>{
        let _data = [...data];
        if(sortKey){
            sortData(_data, sortKey)
        }
        if(params){
            let dateFilterIndex = params.findIndex((filter)=>filter.key === 'date')
            if(dateFilterIndex> -1){
                let _params = [...params];
                _params.splice(dateFilterIndex , 1);
                _data= dateFilter(this.state.BSTData, params[dateFilterIndex].value, _params, sortKey );
            }
            else {
                _data = filterData(_data, params,sortKey)
            }
        }
        this.setState({data: _data})
    }

    render() {
        let {columns, limits, filters, } = this.props;
        let {limit, page, data, params, sortKey}= this.state;
        return (
            <div>
                <Filters
                    filters={filters}
                    addFilter={(key, type, value, cb)=>{
                        this.addFilter(key, type, value, cb)
                    }}
                    doFilter={()=>{
                        this.onFilter();
                    }}
                    params={params}
                />
                <Table
                    data={data.slice((page-1)*limit ,(page-1)*limit + limit )}
                    columns={columns}
                    sortKey={sortKey}
                    onSort={(key, operation)=>{
                        this.addSort(key, operation)
                    }}
                />
                <TablePagination
                    limits={limits}
                    defaultLimit={limit}
                    onChangeLimit={(newLimit)=>{
                        this.onChangeLimit( newLimit)
                    }}
                    page={page}
                    onChangePage={(newPage)=>{
                        this.setState({page: newPage})
                    }}
                    total={data.length}
                />
            </div>
        );
    }
}

export default DataTable;
