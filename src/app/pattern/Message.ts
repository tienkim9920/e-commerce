
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
    
  }
}

export default Message
