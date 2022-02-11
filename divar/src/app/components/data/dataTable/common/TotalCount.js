import React, {Component} from 'react';

class TotalCount extends Component {
    render() {
        let {total}= this.props;
        return (
            <div className="total-count">
                <label>
                    {'تعداد کل:'}
                </label>
                {total}
            </div>
        );
    }
}

export default TotalCount;
