import { memo } from 'react';

function Content({count}) {
    // console.log ('re-render')
    return (
        <h2>HELLO ANH EM F8 {count}</h2>
    )
}
export default memo(Content) //chỉ render khi nào props truyền vào Content thay đổi