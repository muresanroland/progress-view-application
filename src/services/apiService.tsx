import axios from 'axios';
import User from '../types/User';

const ApiService = {
  userLogin(username: string): Promise<User> {
    return axios
      .get(`http://localhost:3004/users/?username=${username}`)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          if (response.data.length > 0) {
            localStorage.setItem(
              'currentUser',
              JSON.stringify(response.data[0])
            );
            return response.data[0];
          } else {
            return false;
          }
        }
        return false;
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default ApiService;
