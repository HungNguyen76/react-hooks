import { memo } from 'react';
import Paragraph from './paragraph/paragraph';

function Content() {
    return (
        <div>
            <Paragraph />
        </div>
    )
}
export default memo(Content) //chỉ render khi nào props truyền vào Content thay đổi