import React, {Component} from 'react';
import PropTypes from 'prop-types'
import THead from "./common/THead";
import TBody from "./common/TBody";

class Table extends Component {
    static propTypes={
        columns: PropTypes.array,
        data: PropTypes.array,
    }
    static defaultProps={
        columns: [],
        data: [],
    }
    render() {
        let {columns, data} = this.props;
        return (
            <table border={1}>
                <THead
                    columns={columns}
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
