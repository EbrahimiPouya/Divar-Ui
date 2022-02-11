import React, {Component} from 'react';
import PropTypes from "prop-types";

class Limit extends Component {
    static propTypes={
        limits: PropTypes.array,
        defaultLimit: PropTypes.number,
        onChange: PropTypes.func,
    }
    static defaultProps={
        limits: [5, 10, 20, 50 ],
        defaultLimit: 10,
        onChange: ()=>{},
    }
    constructor(props) {
        super(props);
        this.state ={
            limit: props.defaultLimit,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.defaultLimit !== prevProps.defaultLimit){
            this.setState({limit: this.props.defaultLimit})
        }
    }

    onChangeLimit=(newLimit) =>{
        this.setState({limit: newLimit} , ()=>{
            this.props.onChange((this.state.limit))
        })
    }

    render() {
        let {defaultLimit, limits} = this.props;
        return (
            <div className="limit">
                <label>
                    {'تعداد :'}
                </label>
                <select
                    value={defaultLimit}
                    onChange={(e)=>{
                        this.onChangeLimit(Number.parseInt(e.target.value))
                    }}
                >
                    {limits.map((limitItem, index)=>{
                        return (
                            <option
                                key={index}
                                value={limitItem} >
                                {limitItem}
                            </option>
                        )
                    })}
                </select>
            </div>

        );
    }
}

export default Limit;
