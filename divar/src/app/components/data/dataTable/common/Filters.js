import React, {Component} from 'react';
import PropTypes from "prop-types";
import FilterItem from "./FilterItem";
import TextInput from "../../../input/text/TextInput";
import SelectInput from "../../../input/select/SelectInput";

class Filters extends Component {
    static propTypes = {
        columns: PropTypes.array,
        addFilter: PropTypes.func,
        doFilter: PropTypes.func,
        params: PropTypes.array,
    };
    static defaultProps = {
        columns : [],
        addFilter: ()=>{},
        doFilter: ()=>{},
        params: [],
    };

    addFilter = (field, type, value, cb=()=>{})=>{
        this.props.addFilter(field, type, value, cb)
    }

    doFilter = ()=>{
        this.props.doFilter()
    }

    render() {
        let {filters, params} = this.props;
        return (
            <div className="filters">
                {filters.map((filter, index)=>{
                    let paramIndex = params.findIndex(item=>item.type === filter.type && item.key === filter.key)
                    let value = undefined;
                    // if(paramIndex > -1){
                    //     value = params[paramIndex].value;
                    // }
                    switch (filter.type) {
                        case 'string':
                        case 'date':
                            return (
                                <FilterItem key={index} label={filter.label}>
                                    <TextInput
                                        onChange={(newValue)=>{
                                            this.addFilter(filter.key, filter.type, newValue)
                                        }}
                                        onEnter={(newValue)=>{
                                            this.addFilter(filter.key, filter.type, newValue, ()=>{
                                                this.doFilter();
                                            })
                                        }}
                                    />
                                </FilterItem>
                            )
                        case 'select':
                            return (
                                <FilterItem key={index} label={filter.label}>
                                    <SelectInput
                                        options={filter.options}
                                        onChange={(newValue)=>{
                                            this.addFilter(filter.key, filter.type, newValue, ()=>{
                                                this.doFilter()
                                            })
                                        }}
                                    />
                                </FilterItem>
                            )
                        default:
                            return <div/>
                    }
                }
                )}
            </div>
        );
    }
}

export default Filters;
