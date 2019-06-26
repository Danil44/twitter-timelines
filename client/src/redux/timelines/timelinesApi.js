import axios from 'axios';

export const getUserTimeline = username => {
  return axios
    .get(`http://localhost:3001/timelines?username=${username}`)
    .then(({ data }) => data)
    .catch(err => console.log(err));
};
