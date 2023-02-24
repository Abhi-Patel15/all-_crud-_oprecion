import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';





// function MyVerticallyCenteredModal(props) {
    // const [user, setUser] = useState({
    //     name: "",
    //     username: "",
    //     email: "",
    //     phone: "",
    //     website: ""
    // });

    // const {id} = useParams ();
    // useEffect(()=>{
    //     loadUser();
    // },[])

    // const loadUser = async () =>{
    //     const result = await axios.get(`http://localhost:3500/users/${id}`);
    //     setUser(result.data);
    //   };
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Modal heading
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <div className="container py-4">
//     <Link className="btn btn-primary" to="/">back to home</Link>
//     <h1 className="display-4">User Id:{id}</h1>
//     <hr />
//     <ul className="list-group w-50">
//         <li className="list-group-item">name: {user.name}</li>
//         <li className="list-group-item">user name: {user.username}</li>
//         <li className="list-group-item">email: {user.email}</li>
//         <li className="list-group-item">phone: {user.phone}</li>
//         <li className="list-group-item">website: {user.website}</li>
//     </ul>     
//     </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
const Home = () => {
    const[users,setUsers] = useState([]);
    // const [modalShow, setModalShow] = React.useState(false);
    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
  });

  const {id} = useParams ();
  useEffect(()=>{
      loadUsers();
  },[])

  const loadUsers = async () =>{
      const result = await axios.get(`http://localhost:3500/users/${id}`);
      setUser(result.data);
    };

    useEffect(() =>{
      
      loadUser();
    
    },[]);
  
    const loadUser = async () =>{
      const result = await axios.get("http://localhost:3500/users");
      setUsers(result.data);
    };
  
  
    const deleteUser = async id => {
      await axios.delete(`http://localhost:3500/users/${id}`);
      loadUser();
    }
    return (
      <div className='container'>
      <button className='btn btn-primer'>AddCategr</button>
      <table className="table">
    <thead className="bg-black text-black">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">User Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
       {users?.map((user,index)=>(
        <tr>
          <th scope='row '>{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
          {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        view
      </Button>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
            {/* <button className='btn btn-primary' to={`/user/${user.id}`}>view</button> */}
            <Link className='btn btn-outline-priimary' to={`/edite/${user.id}`}>Edite</Link>
            <Link className='btn btn-danger' onClick={()=>{deleteUser(user.id)}}>Delete</Link>
            <div>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          view
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">        
<div class="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              <div className="container py-4">
   <h3>User Id:{id}</h3>
  <hr />
  <ul className="list-group w-50">
      <li className="list-group-item">name: {user.name}</li>
 <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
     <li className="list-group-item">phone: {user.phone}</li>
    <li className="list-group-item">website: {user.website}</li>
</ul>     
 </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
          </td>
        </tr>
       ))}
    </tbody>
  </table>
    </div>
    );
}

export default Home