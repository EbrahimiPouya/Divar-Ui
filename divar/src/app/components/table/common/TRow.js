import React, {Component} from 'react';
import PropTypes from "prop-types";

class TRow extends Component {
    static propTypes={
        columns: PropTypes.array,
        item: PropTypes.object,
    }
    static defaultProps={
        columns: [],
        item: {},
    }
    render() {
        let {columns, item} = this.props;
        return (
            <tr>
                {columns.map((col, index)=>{
                    return <td key={index}>
                        {item[col.key]}
                    </td>
                })}
            </tr>
        );
    }
}

export default TRow;
