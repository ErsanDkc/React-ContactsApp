import React from 'react'
import { useState } from 'react'

function Form() {
    const [formText, setformtext] = useState({fullname : "", phone_number:""})

    const onChanceInput = (e) => {
        setformtext({...formText, [e.target.name]: e.target.value})
    }
  return (
    <form >
        <div>
        <input name='fullname' placeholder='Full Name' onChange={onChanceInput} />
        </div>

        <div>
        <input name='phone_number' placeholder='Phone Number' onChange={onChanceInput}  />
        </div>

        <div>
        <button>Add</button>
        </div>

    </form>
  )
}

export default Form