import '../assets/css/App.css';
import DataTable from "./components/data/dataTable/DataTable";

function App() {
  return (
    <div className="App">
      <DataTable
          columns={[
              {label: 'نام', key: 'firstName'},
              {label: 'نام خانوادگی', key: 'lastName'},
          ]}
          data={[
              {firstName: 'name1', lastName: 'family1'},
              {firstName: 'name2', lastName: 'family2'},
              {firstName: 'name3', lastName: 'family3'},
              {firstName: 'name4', lastName: 'family4'},
              {firstName: 'name5', lastName: 'family5'},
              {firstName: 'name6', lastName: 'family6'},
              {firstName: 'name7', lastName: 'family7'},
              {firstName: 'name8', lastName: 'family8'},
              {firstName: 'name9', lastName: 'family9'},
              {firstName: 'name10', lastName: 'family10'},
              {firstName: 'name10', lastName: 'family11'},
              {firstName: 'name12', lastName: 'family12'},
              {firstName: 'name13', lastName: 'family13'},
              {firstName: 'name14', lastName: 'family14'},
              {firstName: 'name15', lastName: 'family15'},
              {firstName: 'name16', lastName: 'family16'},
              {firstName: 'name17', lastName: 'family17'},
              {firstName: 'name18', lastName: 'family18'},
              {firstName: 'name19', lastName: 'family19'},
              {firstName: 'name20', lastName: 'family20'},
          ]}
      />
    </div>
  );
}

export default App;
