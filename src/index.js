import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let data = {
    description: [{name: "Serhio", surname: "Ramires", resume: "I am big man."}, {
        name: "Artem",
        surname: "King",
        resume: "I am middle man."
    }],
    skills: [{name: "HTML", emoji: 'junior'},
        {name: "CSS", emoji: "middle"},
        {name: "C#", emoji: "advanced"},
        {name: "React", emoji: "middle"}]
}
let emmo = {
    junior: '👶', middle: '💪', advanced: '✨'
}

let cocolor = {
    junior: 'Purple', middle: 'Green', advanced: 'Red'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App data={data} emmo={emmo} cocolor={cocolor}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
