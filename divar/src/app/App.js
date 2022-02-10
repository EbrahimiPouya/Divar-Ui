import '../assets/css/App.css';
import Table from "./components/table/Table";

function App() {
  return (
    <div className="App">
      <Table
          columns={[
              {label: 'نام', key: 'firstName'},
              {label: 'نام خانوادگی', key: 'lastName'},
          ]}
          data={[
              {firstName: 'name1', lastName: 'family1'},
              {firstName: 'name2', lastName: 'family2'},
              {firstName: 'name3', lastName: 'family3'},
              {firstName: 'name4', lastName: 'family4'},
          ]}
      />
    </div>
  );
}

export default App;
