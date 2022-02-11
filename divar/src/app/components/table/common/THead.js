import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SortButton from "./SortButton";

class THead extends Component {
    static propTypes = {
        columns: PropTypes.array,
        onSort: PropTypes.func,
    };
    static defaultProps = {
        columns : [],
        onSort: ()=>{},
    };

    render() {
        let {columns, onSort} = this.props;
        return (
            <thead>
                <tr>
                    {columns.map((col, index)=>{
                        return <th key={index}>
                            {col.label}
                            {col.sortable &&
                                <SortButton
                                    operation={'none'}
                                    onChange={(newOperation)=>{
                                        onSort(col.key, newOperation);
                                    }}
                                />
                            }
                        </th>
                    })}
                </tr>
            </thead>
        );
    }
}

export default THead;
