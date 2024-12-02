import {useEffect, useRef} from "react"
import {createPortal} from 'react-dom'

function Modal({children, open, className=''}){
    const modal = useRef()
    useEffect(()=>{
        if(open){
            modal.current.showModal()
        }
        return ()=>modal.current.close()
    },[open])
    return(
        createPortal(<dialog ref={modal} className={`modal ${className}`}>{children}</dialog>, document.getElementById('modal'))
    )
}
export default Modal;