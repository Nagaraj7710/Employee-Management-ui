import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import CreateEmployee from './Components/CreateEmployee/CreateEmployee';

function App() {
  const userName = localStorage.getItem("userName");
  console.log("🚀 ~ userName:", userName)
  return (
    <div className="App">
      <header className="App-header">
        {
          userName ?
            <BrowserRouter>
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/employee-list" Component={EmployeeList} />
                <Route path="/create-employee" Component={CreateEmployee} />
              </Routes>
            </BrowserRouter>
            :
            <Login />
        }
      </header>
    </div>
  );
}

export default App;
