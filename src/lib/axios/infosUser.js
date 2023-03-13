import axios from 'axios';

  async function submitForm(formData) {
    
        const myUser = (await axios.post('http://localhost:3001/api/v1/user/login',formData)).data;
        return myUser;
    
}

function infoToken(formData,token) {
  axios.post('http://localhost:3001/api/v1/user/profile', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
}
export {submitForm, infoToken};