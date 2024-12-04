function Input({label, id, ...props}){
    return(
        <p className="control">
            <label htmlFor={label}>{label}</label>
            <input id={id} name={id} required {...props}/>
        </p>
    )
}
export default Input