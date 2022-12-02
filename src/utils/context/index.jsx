// import React,  { useState, createContext } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ Children }) => {
//     const [theme, setTheme] = useState('light')
//     const toggleTheme = () => { 
//         setTheme(theme === 'light' ? 'dark' : 'light') 
//        }

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {Children}
//         </ThemeContext.Provider>
//     )
// }

import React, { useState, createContext } from 'react';

export const ThemeContext = createContext(); // contexte du theme

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SurveyContext = createContext() //context du questionnaire

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers) => { //fonction qui va jumeler les nouveaux objets aux anciens
    setAnswers({ ...answers, ...newAnswers }) // fonction qui stocke notre objet dans la variable "answers"
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}