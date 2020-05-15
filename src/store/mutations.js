import ApiMap from "@/ApiMap";
import axios from "axios";

export default {
    [ApiMap.SAMPLE]: (state, payload) => {
        state.sample = payload.data;
        axios.defaults.headers.common["Authorization"] = `Bearer ${payload.accessToken}`
    },
};
