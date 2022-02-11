import React, {Component} from 'react';
import PropTypes from "prop-types";

class SortButton extends Component {
    static propTypes = {
        operation: PropTypes.string,
        onChange: PropTypes.func,
    };
    static defaultProps = {
        operation: 'none',
        onChange: ()=>{},
    };

    constructor(props) {
        super(props);
        this.state={
            operation: props.operation
        }
    }

    onChange = (newOperation)=>{
        this.setState({operation: newOperation}, ()=>{
            this.props.onChange(this.state.operation);
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.operation !== prevProps.operation){
            this.setState({operation: this.props.operation});
        }
    }

    render() {
        const operations = [
            {operation: 'desc', text: '+'},
            {operation: 'asyc', text: '-'},
            {operation: 'none', text: '|'},
        ]
        const {operation} = this.state;
        let operationIndex = operations.findIndex((item)=>item.operation === operation)
        if(operationIndex > -1){
            return (
                <button onClick={()=>{
                    this.onChange(operations[ (operationIndex+1)%3 ].operation)
                }}>
                    {operations[operationIndex].text}
                </button>
            );
        }
        return <div/>
    }
}

export default SortButton;
