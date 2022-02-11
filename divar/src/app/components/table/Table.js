import React, {Component} from 'react';
import PropTypes from 'prop-types'
import THead from "./common/THead";
import TBody from "./common/TBody";

class Table extends Component {
    static propTypes={
        columns: PropTypes.array,
        data: PropTypes.array,
        onSort: PropTypes.func,
    }
    static defaultProps={
        columns: [],
        data: [],
        onSort: ()=>{},
    }
    render() {
        let {columns, data, onSort} = this.props;
        return (
            <table border={1}>
                <THead
                    columns={columns}
                    onSort={(key, operation)=>{
                        onSort(key, operation);
                    }}
                />
                <TBody
                    columns={columns}
                    data={data}
                />
            </table>
        );
    }
}

export default Table;
