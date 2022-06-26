import {useState, useEffect} from 'react';

// Kiến thức cần học trước khi học useEffect
// Side Effect
// Observer pattern: Subscribe / unsubscribe
// Events: Add/ remove event listeners
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted/ unmounted
//Call API

/*  useEffect thường dùng để:
    1.Update DOM
    - F8 blog title
    2.Call API
    3.Listen DOM events 
        - Scroll 
        - Resize
    4.Cleanup
        -Remove listenter / unsubscribe
        -clear timer

*/
  /*
    1.useEffect (callback) (ít xài)
        -Gọi callback mỗi khi component re-render
        -Gọi callback sau khi component thêm element vào DOM
    2.useEffect (callback, []) 
        - Chỉ gọi callback 1 lần sau khi component mounted
    3.useEffect (callback, [deps])
        - Callback sẽ được gọi lại mỗi khi dependencies thay đổi
*/
//1.Callback luôn được gọi sau khi component mounted
const tabs = ['posts', 'comments', 'albums']
const UseEffects = () => {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json()) //trả về promise của res.json (object được convert sang javascript)
            .then(posts => {
                setPosts(posts)
            }, [type])
        document.title = title;
    }, [type])

    return (
        <div>
            <h1>useEffect</h1>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    }: {}}
                    onClick={()=> setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <ul>
                {posts.map(post=> <li key={post.id}>{post.title ? post.title : post.name}</li>)}
            </ul>
        </div>
    )
}
export default UseEffects;