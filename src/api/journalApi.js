import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-22c1e-default-rtdb.firebaseio.com'
})


export default journalApi