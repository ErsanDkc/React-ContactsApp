import React from 'react'
import { useState } from 'react'



const initialFormValues = {fullname : "", phone_number:""}
function Form( {addContacts, contacts}) {
    const [formText, setformtext] = useState(initialFormValues)
    
    const onChanceInput = (e) => {
        setformtext({...formText, [e.target.name]: e.target.value})
    }

    const formSubmit = (e) => {
      e.preventDefault();

      if(formText.fullname ==="" || formText.phone_number ==="") {
        return alert("You have to fill correctly each input area!")
      }

      addContacts([...contacts, formText])
      setformtext(initialFormValues)
      
    }
  return (
    <form onSubmit={formSubmit}>
        <div>
        <input name='fullname' placeholder='Full Name' onChange={onChanceInput} value={formText.fullname} />
        </div>

        <div>
        <input name='phone_number' placeholder='Phone Number' onChange={onChanceInput} value={formText.phone_number} />
        </div>

        <div className='btn'>
        <button>Add</button>
        </div>

    </form>
  )
}



export default Form