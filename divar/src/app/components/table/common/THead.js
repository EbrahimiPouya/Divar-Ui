import React, {Component} from 'react';
import PropTypes from 'prop-types';

class THead extends Component {
    static propTypes = {
        columns: PropTypes.array,
    };
    static defaultProps = {
        columns : [],
    };

    render() {
        let {columns} = this.props;
        return (
            <thead>
                <tr>
                    {columns.map((col, index)=>{
                        return <th key={index}>
                            {col.label}
                        </th>
                    })}
                </tr>
            </thead>
        );
    }
}

export default THead;
