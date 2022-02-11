import React, {Component} from 'react';
import PropTypes from "prop-types";
import Limit from "./Limit";
import './style.css'
import Pagination from "../../../pagination/Pagination";
import TotalCount from "./TotalCount";

class TablePagination extends Component {
    static propTypes={
        limits: PropTypes.array,
        defaultLimit: PropTypes.number,
        onChangeLimit: PropTypes.func,
        page: PropTypes.number,
        onChangePage: PropTypes.func,
        total: PropTypes.number,
    }
    static defaultProps={
        limits: [5, 10, 20, 50 ],
        defaultLimit: 10,
        onChangeLimit: ()=>{},
        page: 1,
        onChangePage: ()=>{},
        total: 1,
    }

    render() {
        let {defaultLimit, limits, onChangeLimit, page, onChangePage, total} = this.props;
        return (
            <div className="table-pagination">
                <Limit
                    defaultLimit={defaultLimit}
                    limits={limits}
                    onChange={(newLimit)=>{
                        onChangeLimit(newLimit)
                    }}
                />
                <Pagination
                    page={page}
                    onChangePage={(newPage)=>{
                        onChangePage(newPage)
                    }}
                    max={Math.ceil(total/defaultLimit)}
                />
                <TotalCount total={total}/>
            </div>
        );
    }
}

export default TablePagination;
