
class Notification {

  userId: String;
  description: String

  constructor(userId: String, description: String){
      this.userId = userId
      this.description =description
  }

  toJSON(){
      return {
          userId: this.userId,
          description: this.description
      }
  }

}

export default Notification
