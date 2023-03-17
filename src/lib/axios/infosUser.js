import axios from 'axios';

  async function submitFormUser(formData) {
    
        const myUser = (await axios.post('http://localhost:3001/api/v1/user/login',formData)).data;
        return myUser;
    
}

async function infoUser(token) {
  const myToken = (await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-type": "application/json; charset=UTF-8"
        }
      })).data;
      return myToken;

}

async function changeInfoUser(dataUser,token) {
  const myNewInfoUser = (await axios.put('http://localhost:3001/api/v1/user/profile', dataUser, {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-type": "application/json; charset=UTF-8"
        }
      })).data;
      return myNewInfoUser;

}
export {submitFormUser, infoUser, changeInfoUser};