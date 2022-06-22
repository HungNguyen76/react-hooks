import {useState, useCallback} from 'react'
import Content2 from './Content/Content2'

//2. useCallback() : tránh tạo ra hàm mới ko cần thiết trong function component 
    //- Reference types
    // mỗi lần tạo hàm mới, nó sẽ lưu hàm này vào bộ nhớ rồi trả ra tham chiếu 
    // mỗi lần tạo hàm mới, nó sẽ lưu 1 tham chiếu mới
    //- React memo()


const UseCallback = () => {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback (() => {
        setCount(prevCount => prevCount + 1)
    }, [])
    return ( 
        <div style={{ padding: '10px 32px'}}>
            {/* trong 1 component có thể nhận vào nhiều props, 
            props có thể là nguyên thuỷ , có thể là tham chiếu */}
            <Content2 onIncrease={handleIncrease}/>
            <h1>UseCallback</h1>
            <h1>{count}</h1>
        </div>
    )
}
export default UseCallback;