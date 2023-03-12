import axios from 'axios';

/*export const submitForm = (formData) => async (dispatch) => {
    try {
      const response = await axios.post('/api/submit-form', formData);
      dispatch({
        type: "SUBMIT_FORM_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "SUBMIT_FORM_FAILURE",
        payload: error.message,
      });
    }
  };*/

  /*export const submitForm = (formData) => {
    return dispatch => {
      return axios.post('http://localhost:3001/api/v1/user/login', formData)
        .then(response => {
          // Traitement de la réponse de la requête
        })
        .catch(error => {
          // Traitement de l'erreur de la requête
        });
    }
  }*/
  
  /*export const submitForm = (formData) => {
    return axios.post('http://localhost:3001/api/v1/user/login', formData)
      .then(response => {
        // Traitement de la réponse de la requête
        console.log(response);
      })
      .catch(error => {
        // Traitement de l'erreur de la requête
        console.log('error',error);
      });
  }*/

  async function submitForm(formData) {
    
        const myUser = (await axios.post('http://localhost:3001/api/v1/user/login',formData)).data;
        return myUser;
    
}
export default submitForm;