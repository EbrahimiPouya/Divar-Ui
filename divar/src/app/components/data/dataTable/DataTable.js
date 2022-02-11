import React, {Component} from 'react';
import PropTypes from "prop-types";
import Table from "../../table/Table";
import TablePagination from "./common/TablePagination";
import {sortData} from "./module";

class DataTable extends Component {
    static propTypes={
        columns: PropTypes.array,
        data: PropTypes.array,
        limits: PropTypes.array,
        defaultLimit: PropTypes.number,
    }
    static defaultProps={
        columns: [],
        data: [],
        limits: [5, 10, 20, 50 ],
        defaultLimit: 10,
    }
    constructor(props) {
        super(props);
        this.state={
            limit: props.defaultLimit,
            page: 1,
            data: props.data
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.defaultLimit !== prevProps.defaultLimit){
            this.onChangeLimit(this.props.defaultLimit)
        }
    }

    onChangeLimit = (newLimit)=>{
        this.setState({limit: newLimit})
    }

    sortData = (key , operation)=>{
        let {data} = this.props;
        let sortKey = {key, operation};
        this.setState({data: sortData([...data] , sortKey)});
    }

    render() {
        let {columns, limits, } = this.props;
        let {limit, page, data}= this.state;
        return (
            <div>
                <Table
                    data={[...data].slice((page-1)*limit ,(page-1)*limit + limit )}
                    columns={columns}
                    onSort={(key, operation)=>{
                        this.sortData(key, operation)
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
