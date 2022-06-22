import Content3 from './Content/Content3'
import {useContext} from 'react'
import { ThemeContext } from './ThemeContext'
//Context
//CompA => CompB => CompC

//Theme: Dark / Light

//1. Create context
//2. Provider
//3. Consumer

const UseContext = () => {
    const context = useContext(ThemeContext)
    return (
            <div style={{ padding: 20}}>
                <h1>Use Context</h1>
                <button onClick={context.toggleTheme}>Toggle Theme</button>
                <Content3/>    
            </div>
    )
}
export default UseContext;