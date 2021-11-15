import API from "../http/http";

class Message {

  subjectId: String;
  roomId: String;
  message: String;

  constructor(subjectId: String, roomId: String, message: String){
      this.subjectId = subjectId
      this.roomId = roomId
      this.message = message
  }

  toJSON(){
      return {
        subjectId: this.subjectId,
        roomId: this.roomId,
        message: this.message
      }
  }

  // POST_MESSAGE
  async POST_MESSAGE(){
    const res = await fetch(API.POST_MESSAGE(), {
        method: 'POST',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }

}

export default Message
