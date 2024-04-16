import { useState } from 'react';
import './App.css';
import Register from './Register';
import TableList from './TableList';

const App = () => {
  const [data, setData] = useState([
    {
      key:'CZY',
      userName: 'CZY',
      password: '12345',
      phoneNum: 12345678901
    }])
  return (
    <div className="App">
      <Register data={data} setData={setData} />
      <TableList data={data} setData={setData} />
    </div>
  );
}

export default App;
