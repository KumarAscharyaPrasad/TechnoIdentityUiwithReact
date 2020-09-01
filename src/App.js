import React from 'react';
import logo from './logo.svg';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Navbar from "./Navbar"
import Carrers from "./Carrers"
import Footer from "./Footer"

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                < Route path="/"
                    component={Home} exact />
                <Route path="/about"
                    component={About} />
                <Route path="/service"
                    component={Service} />
                <Route path="/about"
                    component={About} />
                <Route path="/carrer"
                    component={Carrers} />
                <Route path="/contact"
                    component={Contact} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
};
export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;