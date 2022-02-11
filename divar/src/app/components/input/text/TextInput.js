import React, {Component} from 'react';
import PropTypes from "prop-types";

class TextInput extends Component {
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

    onChange=()=>{
        this.props.onChange(this.state.value);
    }

    render() {
        let {value} = this.state;
        return (
            <input
                type={'text'}
                value={value}
                onChange={(e)=>{
                    this.setState({value: e.target.value})
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        this.onChange()
                    }
                }}
            />
        );
    }
};

export default TextInput;
