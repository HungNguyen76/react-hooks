import video1 from '../videos/video-1.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'

function Video(props, ref) {
    const videoRef = useRef()
    //useImperativeHandle đóng gói ref được truyền vào video, để ko thể sử dụng ở bên ngoài component cha 
    //tương tự như tính private trong OOP
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video 
            ref={videoRef}
            src={video1} 
            width={280} 
            height={280} 
        />
    )
}
export default forwardRef(Video);