import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './Home';
import NewPage from './New'
import ContactPage from './Contact'

function ReactRouter() {
    return (
        <div className="app">   
            <h1>REACT ROUTER</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                {/* truyền {<HomePage />} -> react elements */}
                {/* truyền {HomePage} -> react component */}
                <Route path="/" element={<HomePage />}/> 
                <Route path="/news" element={< NewPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
            </Routes>
        </div>
    )
}
export default ReactRouter;