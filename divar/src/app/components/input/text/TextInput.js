import React, {Component} from 'react';
import PropTypes from "prop-types";

class TextInput extends Component {
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        onEnter: PropTypes.func,
    };
    static defaultProps = {
        value : '',
        onChange: ()=>{},
        onEnter: ()=>{},
    };
    constructor(props) {
        super(props);
        this.state={
            value: props.value,
        }
    }

    onChange=()=>{
        this.props.onChange(this.state.value);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.value !== this.props.value){
            this.setState({value: this.props.value})
        }
    }

    render() {
        let {value} = this.state;
        let {onEnter} = this.props;
        return (
            <input
                type={'text'}
                value={value}
                onChange={(e)=>{
                    this.setState({value: e.target.value})
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onEnter(value)
                    }
                }}
                onBlur={()=>{
                    this.onChange()
                }}
            />
        );
    }
};

export default TextInput;
