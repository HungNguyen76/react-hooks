// useEffect 
//1. cập nhật lại state
//2. Cập nhật lại DOM (mutated)
//3. Render lại UI
//4. Gọi Cleanup nếu deps thay đổi
//5. Gọi useEffect callback

//useLayoutEffect
//1. cập nhật lại state
//2. cập nhật DOM (mutated)
//3. gọi cleanup nếu deps thay đổi (sync)
//4. goi useLayoutEffect callback (sync)
//5. Render lại UI
import { useLayoutEffect, useState} from "react";

const UseLayoutEffect = () => {
    const [count, setCount] = useState(0)
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count]);

    const handleRun = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>useLayoutEffect</h1>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}
export default UseLayoutEffect;