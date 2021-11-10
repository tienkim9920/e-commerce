import API from "../http/http"
import Coupon from "./Coupon"
import Ticket from "./Ticket"
import Notification from "./Notification"
import Reputation from "./Reputation"
import Client from "./Client"
import Shop from "./Shop"
import Order from "./Order"



class User {

  _id: any;
  authId: any;
  email: any;
  password: any;
  name: any;
  image: any;
  score: any;
  ticket: any = [];
  coupon: any = [];
  like: any = [];
  order: any = [];
  comment: any = [];
  notification: any = [];
  reputation: any = [];

  constructor(_id: any) {
    this._id = _id;
  }

  toJSON() {
    return {
      authId: this.authId,
      email: this.email,
      password: this.password,
      name: this.name,
      image: this.image,
      score: this.score,
    };
  }

  // GET Ticket
  async getTickets() {
    const res = await fetch(API.GET_TICKETS(this._id));
    const data = await res.json();
    this.ticket = data.reverse();
  }

  // POST Ticket
  async postTicket(ticket: Ticket) {
    const data = await ticket.POST_TICKET();
    this.ticket = [data, ...this.ticket];
  }

  // GET Coupon
  async getCoupons() {
    const res = await fetch(API.GET_COUPONS(this._id));
    const data = await res.json();
    this.coupon = data.reverse();
  }

  // POST coupon
  async postCoupon(coupon: Coupon) {
    const data = await coupon.POST_COUPON();
    this.coupon = [data, ...this.coupon];
  }

  // GET Detail User
  async getDetail() {
    const res = await fetch(API.GET_DETAIL_USER(this._id));
    const data = await res.json();
    this.authId = data.authId;
    this.email = data.email;
    this.name = data.name;
    this.image = data.image;
    this.score = data.score;
  }

  // GET List Like:TN
  async getListLike() {
    const res = await fetch(API.GET_LIKE_PRODUCT(this._id));
    const data = await res.json();
    this.like = data;
  }
  // GET List Reputation

  // GET List Order:TN
  async getListOrder() {
    const res = await fetch(API.GET_ORDER_USER(this._id));
    const data = await res.json();
    this.order = data;
  }

  async getOrderUser() {
    console.log(this._id)
    const res = await fetch(API.GET_ORDER_USER(this._id));
    const data = await res.json();
    this.order = data.reverse();
  }

  // GET List Comment:TN
  async getListComment() {
    const res = await fetch(API.GET_COMMENT_USER(this._id));
    const data = await res.json();
    this.comment = data;
  }

  // GET List Notification:TN
  async getListNotification() {
    const res = await fetch(API.GET_NOTIFICATION_USER(this._id));
    const data = await res.json();
    this.notification = data;
  }

  // GET List Reputation:TN
  async getListReputation() {
    const res = await fetch(API.GET_REPUTATION_USER(this._id));
    const data = await res.json();
    this.reputation = data;
  }

  // POST List Notification:TN
  async postListNotification(notification: Notification) {
    const data = await notification.POST_NOTIFICATION();
    this.notification = [...this.notification, data];
    console.log(this.notification);
  }

  // Function Sign In User return true - false
  async signInUser() {
    const res = await fetch(API.POST_LOGIN(), {
      method: 'POST',
      body: JSON.stringify(this.toJSON()),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();

    if (data.msg === 'Code 404') {
      return false;
    }
    return data;
  }

  // Function Sign Up User
  async signUpUser(permission: any) {
    const res = await fetch(API.POST_USER(), {
      method: 'POST',
      body: JSON.stringify(this.toJSON()),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();

    if (data.msg === 'Code 200') {
      // Kiểm tra quyền và khởi tạo đối tượng
      if (permission === 'client') {
        const randomCode = (Math.random() + 1).toString(36).substring(6);
        const client = new Client('', data.userId, 50000, randomCode, false);
        await client.POST_CLIENT();
      } else {
        // shop
        const createTime = `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`;
        const shop = new Shop('', data.userId, '', '', '', 0, '', createTime);
        await shop.POST_SHOP();
      }

      return true;
    }
    return false;
  }

  // PATCH Score User
  async PATCH_SCORE() {
    const body = {
      score: this.score,
    };

    await fetch(API.PATCH_INFO_USER(this._id), {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }, 
    });
  }

  // PATCH_USER
  async PATCH_USER(file: any, checking: Boolean) {
    const formData = new FormData();

    formData.append('checking', checking.toString());
    formData.append('file', file);
    formData.append('name', this.name);

    const res = await fetch(API.PATCH_USER(this._id), {
      method: 'PATCH',
      body: formData,
    });
    const data = await res.json();
    console.log(data);
  }

  // POST Notification
  async postNotification(notificationPost: Notification) {
    const data = await notificationPost.POST_NOTIFICATION();
    this.notification = [...this.notification, data];
  }

  // POST
  async postReputation(reputationPost: Reputation) {
    const data = await reputationPost.POST_REPUTATION();
    this.notification = [...this.notification, data];
  }

  async deleteReputation(reputationDelete: Reputation) {
    const data = await reputationDelete.DELETE_REPUTATION();

    let updateReputation = this.reputation.filter((item: Reputation) => {
      return item !== reputationDelete;
    });
    this.reputation = updateReputation;
  }

  async checkingCoupon(code: any) {

    const coup = await this.checkingCode(code)

    if (coup === null){
      return false
    }

    // Thỏa mãn sẽ gọi tiếp API Checking Coupon
    const res = await fetch(API.CHECKING_COUPON_USER(this._id, coup._id))
    const data = await res.json()

    if (data.toString() === 'Status True'){
      return false
    }

    return coup

  }

  // Gọi API kiểm tra code của SHOP
  async checkingCode(code: any) {
    const res = await fetch(API.GET_COUP_CODE(code))
    const data = await res.json()
    return data
  }

  // Kiểm tra xem thg user nó đã lưu coupon vào hay chưa
  checkingExistCoupon(_id: any){

    const checking = this.coupon.some((element: any) => {
      return element.userId === this._id && element.coupId._id === _id
    })

    return checking
  }

  resetUser() {
    this.name = '';
    this.email = '';
    this.authId = '';
    this.password = '';
    this.image = '';
    this.score = 0;
  }
}

export default User;
