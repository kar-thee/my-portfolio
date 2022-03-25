import axios from "axios";

const SendMessageApiCall = async (data) => {
  try {
    const response = await axios.post(process.env.REACT_APP_SEND_MESSAGE, data);
    return response;
  } catch (err) {
    return err.response;
  }
};
export default SendMessageApiCall;
