import React, {Component} from 'react';
import PropTypes from "prop-types";

class FilterItem extends Component {
    static propTypes = {
        label: PropTypes.string,
    };
    static defaultProps = {
        label: '',
    };

    render() {
        let {label, children} = this.props;
        return (
            <div className="filter-item">
                <label>{label}</label>
                <div>{children}</div>
            </div>
        );
    }
}

export default FilterItem;
