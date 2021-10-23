
const url = 'http://localhost:4000'

const API = {

    GET_DETAIL_USER: (_id: any) => {
        return url + `/user/${_id}`
    },

    GET_TICKETS_USER: (userId: any) => {
        return url + `/ticket/${userId}`
    },

    GET_COUPONS_USER: (userId: any) => {
        return url + `/coupon/${userId}`
    },

    POST_TICKET_USER: () => {
        return url + `/ticket`
    },

    POST_COUPON_USER: () => {
        return url + `/coupon`
    },

    POST_REPUTATION: ()=>{
      return url + `/reputation`
    },

    DELETE_REPUTATION: (id: any) => {
      return url + `/reputation/${id}`
    },

    POST_LIKE: ()=>{
      return url + `/like`
    },

    DELETE_LIKE: (id: any)=>{
      return url + `/like/${id}`
    },

    POST_MESSAGE: ()=>{
      return url + `/message`
    },

    POST_NEWFEED:()=>{
      return url + `/newfeed`
    },

    POST_NOTIFICATION:()=>{
      return url + `/notification`
    },

    POST_OPTION: ()=>{
      return url + `/option`
    },

    POST_PRODUCT:()=>{
      return url + `/product`
    },

    DELETE_PRODUCT:(productID: any)=>{
      return url + `/product/${productID}`
    },

    PATCH_PRODUCT:(productID: any)=>{
      return url + `/product/${productID}`
    }

}

export default API
