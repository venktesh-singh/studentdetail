import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Component/Footer';
import Header from './Component/Header';
import StudentList from './Page/StudentList';
import About from './Page/About';

function App() {
  return (

    <> 
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route exact path="/" element={<StudentList />}>
                <Route exact path="/about" element={<About />}>
              </Route>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </>

  );
}

export default App;
