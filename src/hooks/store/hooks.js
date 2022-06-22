import {useContext} from  'react'
import Context from './Context'
//custom hook
export const useStore = () => {
    const [state, dispatch] = useContext(Context)
    return [state, dispatch]
}