import "../styling/Admin.css";
import { persons } from "../../peopleDB";
import { useParams } from "react-router-dom";

const Admin = () => {


    return (
        <div class="container">
        <h1 class="admin-h1">Admin</h1>
        <ul>
            {persons.map(person => (
                <li class="persons" key={person.id}>
                {person.name}
                <br/>
                {person.email}
                <br/>
                {person.role}
                <button class="button">Edit</button>
                <button class="button">Delete</button>
                
                </li>
            ))}
       </ul>
        </div>
    );
    }
    
    export default Admin;