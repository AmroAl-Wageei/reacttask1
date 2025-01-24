import './App.css';
import React from 'react';
// import Task1 from './components/day1/task1';
// import Task2 from './components/day1/task2';

// import Task3 from './components/day1/task3';
// import Task4 from './components/day1/task4';
// import Task5 from './components/day1/task5';
// import Task6 from './components/day1/task6';

// import Task7 from './components/day1/task7';
// import Task8 from './components/day1/task8';

// import Task9 from './components/day1/task9';
// import Task10 from './components/day1/task10';

// import Task11 from './components/day1/task11';
// import Task12 from './components/day1/task12';

// import Task13 from './components/day1/task13';

import Task14 from './components/day1/task14';

import { ToastContainer , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">


    <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
    />

    <Task14  /> <hr  />
    {/* 
      
      

      
      */}








    </div>
  );
}

export default App;
