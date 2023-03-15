import './Form.css';
import './Table.css';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';
import { useState , useEffect } from 'react';

function App() {

  const [user, setUser] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex === null) {
            setUser([...user, { name: name, age: age, status: status }]);
        } else {
            const newUserData = [...user];
            newUserData[editIndex] = { name: name, age: age, status: status };
            setUser(newUserData);
            setEditIndex(null);
            // const userData = { name, age, status };
            // setUser([...user, userData])
        }
        setName('');
        setAge('')
        setStatus('Active')
    }

    const handleEdit = (index) => {
    const selectData = user[index];
    setName(selectData.name);
    setAge(selectData.age);
    setStatus(selectData.status);
    setEditIndex(index);
  }
  
    const handleDelete = (index) => {
      const newUser = [...user];
      newUser.splice(index, 1);
      setUser(newUser);
  };

  useEffect(() => {
    // console.log(user);

  }, [user])

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <FormComponent name={name} setName={setName} age={age} setAge={setAge} status={status} setStatus={setStatus}/>
      <br/><br/>
      <button type="submit">{editIndex === null ? 'submit' : 'update'}</button>
      </form>
      <br />
      <TableComponent user={user} setUser={setUser} editIndex={handleEdit} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}
export default App;
