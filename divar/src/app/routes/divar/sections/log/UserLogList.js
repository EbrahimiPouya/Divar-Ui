import React, {Component} from 'react';
import DataTable from "../../../../components/data/dataTable/DataTable";
import columns from "./common/columns";
import filters from "./common/filters";

class UserLogList extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading: false,
            data: undefined,
        }
    }
    componentDidMount() {
        this.reload();
    }

    reload = ()=>{
        this.setState({loading: true}, ()=>{
            this.getData()
        })
    }

    getData = ()=>{
        fetch("data/data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        loading: false,
                        data: result.slice(0 ,100)
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: true,
                    });
                }
            )
    }

    render() {
        let {data, loading} = this.state;

        return (
            <div>
                {!loading && data &&
                <DataTable
                    columns={columns}
                    filters={filters}
                    data={data}
                />
                }
            </div>
        );
    }
}

export default UserLogList;
