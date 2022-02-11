import React, {Component} from 'react';
import PropTypes from "prop-types";

class SelectInput extends Component {
    static propTypes = {
        options: PropTypes.array,
        onChange: PropTypes.func,
    };
    static defaultProps = {
        options : [],
        onChange: ()=>{},
    };
    constructor(props) {
        super(props);
        this.state={
            value: '',
        }
    }

    onChange=(newValue)=>{
        this.setState({value: newValue}, ()=>{
            this.props.onChange(this.state.value);
        })
    }

    render() {
        let {options} = this.props;
        let {value} = this.state;
        return (
            <select
                value={value}
                onChange={(e)=>{
                    this.onChange(e.target.value)
                }}
            >
                <option value=''>{'انتخاب کنید'}</option>
                {options.map((option, index)=>{
                    return (
                        <option
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    )
                })}
            </select>
        );
    }
}

export default SelectInput;
