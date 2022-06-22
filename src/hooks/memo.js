import {useState, memo} from 'react'
import Content from './Content/Content'

//memo ghi nhớ props của 1 component, 
//để quyết định có render component đó hay ko, tránh re-render ko cần thiết

//1. memo() => Higher Order Component (HOC)
//2. useCallback() : tránh tạo ra hàm mới ko cần thiết trong function component 
    //- Reference types
    //- React memo()

//3 cái hay sử dụng trong reactjs
//Hooks
//HOC
//Render props

const Memo = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
    return (
        <div style={{ padding: '10px 32px'}}>
            <Content/>
            <h1>Memo</h1>
            <h1>{count}</h1>
            <button onClick={increase}>Click me!</button>
        </div>
    )
}
export default memo(Memo);