import ApiMap from "@/ApiMap";

import SampleAPI from "@api/sample"

function _promise(apiFunction, payload, store, constant) {
return new Promise((resolve, reject) => {
  apiFunction(payload)
    .then(resp => {
      store.commit(constant, resp.data);
      resolve(resp);
    })
    .catch(err => {
      reject(err);
    });
});
}

export default {
  [ApiMap.SAMPLE] (store, payload){
    return _promise(SampleAPI.sample, payload, store, ApiMap.SAMPLE);
  }
};
