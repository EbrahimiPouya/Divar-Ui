import React, {Component} from 'react';
import '../assets/css/App.css';
import DataTable from "./components/data/dataTable/DataTable";
// import data from '../../public/data.json'

class App extends Component{
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
        <div className="App">
          {!loading && data &&
          <DataTable
              columns={[
                {label: 'نام', key: 'name', sortable: true},
                {label: 'تاریخ', key: 'date', sortable: true},
                {label: 'عنوان آگهی', key: 'title', sortable: true},
                {label: 'فیلد', key: 'field', sortable: true},
                {label: 'مقدار فبلی', key: 'old_value'},
                {label: 'مقدار جدید', key: 'new_value'},
              ]}
              filters={[
                {label: 'نام', key: 'name', type: 'string'},
                {label: 'تاریخ', key: 'date', type: 'date'},
                {label: 'عنوان آگهی', key: 'title', type: 'string'},
                {
                  label: 'فیلد', key: 'field', type: 'select',
                  options: [
                    {
                      value: 'عنوان',
                      label: 'عنوان',
                    },
                    {
                      value: 'قیمت',
                      label: 'قیمت',
                    },
                  ]
                },
              ]}
              data={data}
          />
          }
        </div>
    );
  }
}

export default App;
