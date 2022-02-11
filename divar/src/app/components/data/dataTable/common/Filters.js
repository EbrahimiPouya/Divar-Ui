import React, {Component} from 'react';
import PropTypes from "prop-types";
import FilterItem from "./FilterItem";
import TextInput from "../../../input/text/TextInput";
import SelectInput from "../../../input/select/SelectInput";

class Filters extends Component {
    static propTypes = {
        columns: PropTypes.array,
        onFilter: PropTypes.func,
    };
    static defaultProps = {
        columns : [],
        onFilter: ()=>{},
    };

    onFilter = (field, type, value)=>{
        this.props.onFilter(field, type, value)
    }

    render() {
        let {filters} = this.props;

        return (
            <div className="filters">
                {filters.map((filter, index)=>{
                    switch (filter.type) {
                        case 'string':
                            return (
                                <FilterItem key={index} label={filter.label}>
                                    <TextInput
                                        onChange={(newValue)=>{
                                            this.onFilter(filter.key, filter.type, newValue)
                                        }}
                                    />
                                </FilterItem>
                            )
                        case 'date':
                            return (
                                <FilterItem key={index} label={filter.label}>
                                    <TextInput
                                        onChange={(newValue)=>{
                                            this.onFilter(filter.key, filter.type, newValue)
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
                                            this.onFilter(filter.key, filter.type, newValue)
                                        }}
                                    />
                                </FilterItem>
                            )
                    }
                }
                )}
            </div>
        );
    }
}

export default Filters;
