import {useState, createContext} from 'react'
import Content from './Content/Content'

//Context
//CompA => CompB => CompC

//Theme: Dark / Light

//1. Create context
//2. Provider
//3. Consumer

export const ThemeContext = createContext()

function ThemeProvider() {
    const [theme, setTheme ] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <ThemeContext.Provider value={theme}>
            <h2>useContext</h2>
            <div style={{padding: 20}}>
                <button onClick={toggleTheme}>Toggle</button>
                <Content />
            </div>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider