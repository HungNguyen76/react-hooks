import { memo } from 'react';

function Content2({onIncrease}) {
    // console.log ('re-render')
    return (
        <>
            <h2>HELLO ANH EM F8</h2>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}
export default memo(Content2) //chỉ render khi nào props truyền vào Content thay đổi