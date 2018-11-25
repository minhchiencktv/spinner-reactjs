import React, { Component } from 'react';
import './App.css';
import Spinner from './spinner/Spinner';
import DataTable from './data-table/dataTable';
import data_mock from '../src/data.json';

class App extends Component {

  constructor(props){
    super(props);
  }

  delete(o) {
    console.log(o);
  }

  render() {
    const data = {
      header: [
        {
          text: 'ID',
        },
        {
          text: 'Name',
        },
        {
          text: 'Phone',
        },
        {
          text: 'Actions',
          formator: (item) => <button onClick={this.delete.bind(this, item)}>Select</button>,
        },
      ],
      rows: [
        {
          id: 1,
          name: 'Name 1',
          phone: '12345678',
        },
        {
          id: 2,
          name: 'Name 2',
          phone: '12345678',
        },{
          id: 3,
          name: 'Name 3',
          phone: '12345678',
        }
      ]
    }
    return (
      <div className="App">
        {/* <Spinner /> */}
        <DataTable
          header={data.header}
          data={data_mock}
        />
      </div>
    );
  }
}

export default App;
