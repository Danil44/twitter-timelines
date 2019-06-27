import axios from 'axios';

export const getUserTimeline = username => {
  return axios
    .get(`/timelines?username=${username}`)
    .then(({ data }) => data)
    .catch(err => console.log(err));
};
