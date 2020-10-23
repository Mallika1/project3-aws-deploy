import axios from "axios";

export default {
   
  submitRecord:function(record) {
    console.log("in aPi call")
    return axios.post("/api/dqruledata/submitRecord" , record);
  },
  DQRuleList: function(offset) {
    return axios.get("/api/dqruledata/DQRuleList/" + offset);
  },
  deleteDQRuleData:function(DQRuleDelete) {
    return axios.post("/api/dqruledata/deleteDQRuleData" , DQRuleDelete);
  },
};

