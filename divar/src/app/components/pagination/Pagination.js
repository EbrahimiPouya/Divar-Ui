import React, {Component} from 'react';
import PropTypes from "prop-types";
import './style.css'

class Pagination extends Component {
    static propTypes={
        page: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        onChangePage: PropTypes.func,
    }
    static defaultProps={
        page: 1,
        max: 1,
        min: 1,
        onChangePage: ()=>{},
    }
    render() {
        let{page, onChangePage, max, min} = this.props;
        return (
            <div className="pagination">
                <button
                    disabled={page === min}
                    onClick={() => {
                        onChangePage(page -1)
                    }}
                >
                    {'قبلی'}
                </button>

                {page}
                <button
                    disabled={page === max}
                    onClick={() => {
                        onChangePage(page +1)
                    }}
                >
                    {'بعدی'}
                </button>
            </div>
        );
    }
}

export default Pagination;
