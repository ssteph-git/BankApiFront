import axios from 'axios';

  async function submitForm(formData) {
    
        const myUser = (await axios.post('http://localhost:3001/api/v1/user/login',formData)).data;
        return myUser;
    
}

async function infoToken(formData,token) {

  const myToken = (await axios.post('http://localhost:3001/api/v1/user/profile', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-type": "application/json; charset=UTF-8"
        }
      })).data;
      return myToken;

  // axios.post('http://localhost:3001/api/v1/user/profile', formData, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         "Content-type": "application/json; charset=UTF-8"
  //       }
  //     })
        // .then(response => {
        //   console.log(response.data);
        //   return response.data.status;
        // })
        // .catch(error => {
        //   console.log(error);
        //   return error.data.status;
        // });
}
export {submitForm, infoToken};