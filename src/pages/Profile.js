import axios from 'axios';
import { useSelector } from 'react-redux';


  

function Profile() {

  const form = useSelector(state => state.formSave);
  console.log("MAform",form);

    return (
  
     <>page profil
      <p>{form.formData.email}</p>
     </>
    );
  }
  
  export default Profile;
  