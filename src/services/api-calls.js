import axios from 'axios';

var citesLegislation = (animal_id) => {
    var headers = {
      'Content-Type': 'application/json',
      'X-Authentication-Token': 'Ke8QltCkeS3LRyvav4FrrQtt'
    };
    animal_id = 4521;
    return axios.get('https://api.speciesplus.net/api/v1/taxon_concepts/'+animal_id+'/cites_legislation', {headers: headers})
    .then((res) => {
      console.log(res.data);
    })
  };

  export default citesLegislation;