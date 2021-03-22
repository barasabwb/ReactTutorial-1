import React, {useState} from "react"
const InputList = props =>{
    const [title, setTitle] = useState("")
    const onChange =e => {
        setTitle(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()){
            props.addTodoProps(title)
            setTitle("")
        }else{
            alert("please write something")

        }
    }
    return  (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text"
                   onChange={onChange}
                   className="input-text"
                   placeholder="Add Item...."
                   value={title}
                   name={"title"}

            />
            <button className="input-text">Submit</button>


        </form>
    )
}
export default InputList