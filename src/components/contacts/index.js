
import List from './List'
import Form from './Form'
import { useState, useEffect } from 'react'
import "./style.css"


function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "John Parker",
      phone_number : 854586589
    },
    {
      fullname: "Eddy Smile",
      phone_number : 123656666
    },
    {
      fullname: "Barnie Smoot",
      phone_number : 456588777
    },
  ])
  useEffect(() => {
    console.log(contacts)
  }, [contacts])
  return (
    <div id="container">
      <h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd17jvTK_V7NG5b3xf4onrxrMyv5tTwTUC7A&usqp=CAU" alt="" /> Contacts</h1>
        <List contacts={contacts}/>
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts