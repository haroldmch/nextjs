import { useState } from "react"


const CategoryForm = ({addCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const value = inputValue.trim()

    if(value.length == 0) return

    addCategory(value)
    setInputValue('')

  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Gif"
        value={inputValue}
        onChange={onInputChange}/>
    </form>
  )
}

export default CategoryForm