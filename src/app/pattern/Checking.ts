
class Checking {

  roomId: String;
  subjectId: String;
  status: Boolean;
  count: Number;

  constructor(roomId: String,subjectId: String,status: Boolean,count: Number) {
    this.roomId = roomId;
    this.subjectId=subjectId;
    this.status = status;
    this.count = count;

  }

  toJSON(){
      return {
        roomId: this.roomId,
        subjectId: this.subjectId,
        status: this.status,
        count: this.count
      }
  }

}

export default Checking
