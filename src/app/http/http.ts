const url = 'http://localhost:4000'

const API = {

    // Auth
    GET_AUTH: () => {
        return url + `/auth`
    },

    // User
    GET_DETAIL_USER: (_id: any) => {
      return url + `/user/${_id}`
    },

    GET_TICKETS_USER: (userId: any) => {
      return url + `/ticket/${userId}`
    },

    GET_COUPONS_USER: (userId: any) => {
      return url + `/coupon/${userId}`
    },

    CHECKING_COUPON_USER: (userId: any, coupId: any) => {
      return url + `/coupon/checking/status?userId=${userId}&coupId=${coupId}`
    },

    GET_NOTIFICATION_USER: (userId: any) => {
      return url + `/notification/${userId}`
    },

    GET_REPUTATION_USER: (userId: any) => {
      return url + `/reputation/${userId}`
    },

    GET_COMMENT_USER: (userId: any) => {
      return url + `/comment/${userId}`
    },

    POST_TICKET_USER: () => {
      return url + `/ticket`
    },

    POST_COUPON_USER: () => {
      return url + `/coupon`
    },

    PATCH_INFO_USER: (_id: any) => {
      return url + `/user/update/info/${_id}`
    },

    POST_CHANGE_PASSWORD: () => {
      return url+'/user/changepassword'
    },

    // Product
    POST_DETAIL_PRODUCT: () => {
      return url + `/detail`
    },

    // Tick
    POST_TICKs: () => {
      return url + `/tick`
    },

    GET_TICK: () => {
      return url + `/tick`
    },

    //ADDRESS
    GET_ADDRESS_SHOP: (shopId: any) => {
      return url + `/address/detail/${shopId}`
    },

    GET_DETAIL_ADDRESS_BY_ADDRESSID: (id: any) => {
      return url + `/address/detailAddress/${id}`
    },

    POST_ADDRESS_SHOP: () => {
      return url + `/address`
    },

    PATCH_ADDRESS_SHOP: (id: any) => {
      return url + `/address/address/${id}`
    },

    DELETE_ADDRESS_SHOP: (id: any) => {
      return url + `/address/${id}`
    },

    POST_USER: () => {
        return url + `/user`
    },

    POST_LOGIN: () => {
        return url + `/user/login`
    },

    PATCH_USER: (_id: any) => {
        return url + `/user/update/${_id}`
    },

    // Ticket
    GET_TICKETS: (userId: any) => {
        return url + `/ticket/${userId}`
    },

    POST_TICKET: () => {
        return url + `/ticket`
    },

    PATCH_TICKET: (_id: any) => {
      return url + `/ticket/update/ticket/${_id}`
    },

    // Coupon
    GET_COUPONS: (userId: any) => {
        return url + `/coupon/${userId}`
    },

    POST_COUPON: () => {
        return url + `/coupon`
    },

    PATCH_COUPON: (_id: any) => {
      return url + `/coupon/${_id}`
    },

    //REPUTATION
    GET_REPUTATION_SHOP:(query:any)=>{
      return url + `/reputation/detail${query}`
    },

    POST_REPUTATION: ()=>{
      return url + `/reputation`
    },

    DELETE_REPUTATION: (id: any) => {
      return url + `/reputation/${id}`
    },

    // Newfeed
    POST_NEWFEED:()=>{
      return url + `/newfeed`
    },


    // Notification
    POST_NOTIFICATION:()=>{
      return url + `/notification`
    },


    // Option
    POST_OPTION: ()=>{
      return url + `/option`
    },


    // Order
    GET_DETAIL_ORDER: (_id: any) => {
        return url + `/order/${_id}`
    },

    POST_ORDER: () => {
        return url + `/order`
    },

    PATCH_ORDER: (_id: any) => {
        return url + `/order/${_id}`
    },

    GET_ORDER_USER:(userId: any) => {
      return url + `/order/user/${userId}`
    },



    // Detail
    GET_DETAIL_BY_ORDER: (orderId: any) => {
        return url + `/detail/order?orderId=${orderId}`
    },


    // Product
    GET_DETAIL_PRODUCT: (_id: any) => {
        return url + `/product/${_id}`
    },

    GET_HOME_PRODUCT: (page: any) => {
        return url + `/product/home/pagination?page=${page}`
    },

    GET_DISCOUNT_PRODUCT: () => {
        return url + `/product/sale/discount`
    },

    PATCH_LIKE: (_id: any) => {
        return url + `/product/like/${_id}`
    },

    PATCH_DISLIKE: (_id: any) => {
        return url + `/product/dislike/${_id}`
    },

    POST_PRODUCT:()=>{
        return url + `/product`
      },

    DELETE_PRODUCT:(productID: any)=>{
        return url + `/product/${productID}`
    },

    PATCH_PRODUCT:(productID: any)=>{
        return url + `/product/${productID}`
    },



    // Like
    GET_LIKE_PRODUCT: (productId: any) => {
        return url + `/like/list/productId?productId=${productId}`
    },

    CHECKING_LIKE_USER: (userId: any, productId: any) => {
        return url + `/like/checking?userId=${userId}&productId=${productId}`
    },

    POST_LIKE: ()=>{
        return url + `/like`
    },

    DELETE_LIKE: (id: any)=>{
        return url + `/like/${id}`
    },



    // Comment
    GET_COMMENT_PRODUCT: (productId: any) => {
        return url + `/comment/${productId}`
    },

    POST_COMMENT: () => {
        return url + `/comment`
    },



    // Option
    GET_OPTION_PRODUCT: (productId: any) => {
        return url + `/option/${productId}`
    },



    // Room
    POST_ROOM: () => {
        return url + `/room`
    },



    // Message
    GET_MESSAGE_BY_ROOM: (roomId: any) => {
        return url + `/message/list/roomId/${roomId}`
    },

    POST_MESSAGE: ()=>{
        return url + `/message`
    },


    // Shop and Coup
    POST_SHOP: () => {
      return url + `/shop`
    },

    PATCH_SHOP: (_id: any) =>{
      return url + `/shop/${_id}`
    },

    GET_DETAIL_SHOP: (_id: any) => {
      return url + `/shop/${_id}`
    },

    GET_COUP_SHOP: (shopId: any) => {
      return url + `/coup?shopId=${shopId}`
    },

    POST_COUP_SHOP: () => {
      return url + `/coup`
    },

    PATCH_COUP_SHOP: () => {
      return url + `/coup`
    },

    DELETE_COUP_SHOP: () => {
      return url + `/coup`
    },

    GET_COUP_CODE: (code: any) => {
      return url + `/coup/${code}`
    },

    GET_DETAIL_SHOP_BY_USERID: (userId: any) => {
      return url + `/shop/detail/${userId}`
    },


    // Category
    GET_CATEGORY: () => {
        return url + `/category`
    },

    //Room
    GET_ROOM_SHOP: (shopId:any)=>{
      return url + `/room/list/shopId/${shopId}`
    },

    //Client
    GET_ROOM_CLIENT:(clientId: any)=>{
      return url + `/room/list/clientId/${clientId}`
    },

    POST_CLIENT:()=>{
      return url + `/client`
    },

    GET_DETAIL_CLIENT:(userID: any)=>{
      return url + `/client/${userID}`
    },

    // Payment
    GET_PAYMENT: () => {
      return url + `/pay`
    },

    // Note
    POST_NOTE: () => {
      return url + `/note`
    }
}

export default API
