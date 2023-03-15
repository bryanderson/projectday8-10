const TableComponent = ( props ) => {
    const {user, handleEdit, handleDelete} = props

    // let array = user;
    // console.log(array)


    return (

        <div>
            <table className="us-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.status}</td>
                            <td>
                                <button onClick = {() => handleDelete(index)}>Delete</button> 
                                <button onClick ={()=> handleEdit(index)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent