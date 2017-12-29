import axios from 'axios';

export default class LabelService {

  static getLabels() {
    return axios.post(`/tracenet/labeling/api/labelservice/labels/extended/`, {
      "labelDefQueryParts": [
        {
          "labelDefinitionName": "LCA SVW",
          "or": false
        }
      ],
      "startTime": "",
      "endTime": "",
      "startDuration": 0,
      "useCases": "",
      "istep": "420",
      "vnumbers": [],
      "streetTypes": [],
      "archived": false
    })
  }
}
