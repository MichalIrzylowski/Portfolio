import { CALL_API } from "redux-api-middleware";
import {SEND_MESSAGE_REQUEST,
        SEND_MESSAGE_SUCCES,
        SEND_MESSAGE_FAILURE} from './ActionTypes'

export const sendMessage = (body) => (
  {
    [CALL_API]: {
        endpoint: "/api/message",
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        types: [
          SEND_MESSAGE_REQUEST,
          SEND_MESSAGE_SUCCES,
          SEND_MESSAGE_FAILURE
        ]
      }
  }
)
