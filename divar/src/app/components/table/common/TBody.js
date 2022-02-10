import React, {Component} from 'react';
import PropTypes from "prop-types";
import TRow from "./TRow";

class TBody extends Component {
    static propTypes={
        columns: PropTypes.array,
        data: PropTypes.array,
    }
    static defaultProps={
        columns: [],
        data: [],
    }
    render() {
        let {columns, data} =this.props;
        return (
            <tbody>
                {data.map((item, index)=>{
                    return(
                        <TRow
                            key={index}
                            columns={columns}
                            item={item}
                        />
                    )
                })}
            </tbody>
        );
    }
}

export default TBody;
