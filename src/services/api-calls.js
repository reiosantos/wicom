import axios from 'axios';

var citesLegislation = (animal_id) => {
    var headers = {
      'Content-Type': 'application/json',
      'X-Authentication-Token': 'Ke8QltCkeS3LRyvav4FrrQtt'
    }
    animal_id = 5924;
    return axios.get(process.env.REACT_APP_API_URL+'/api/v1/taxon_concepts/'+animal_id+'/cites_legislation', {headers: headers})
    .then((res) => {
      console.log(res.data)
    })
  }

  export default citesLegislation;