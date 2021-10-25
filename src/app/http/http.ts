
const url = 'http://localhost:4000'

const API = {

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

    // Product
    POST_DETAIL_PRODUCT: () => {
      return url + `/detail`
    },

    // Tick
    POST_TICKs: () => {
      return url + `/tick`
    },

    // SHOP
    POST_COUP_SHOP: () => {
      return url + `/coup`
    },

    PATCH_COUP_SHOP: () => {
      return url + `/coup`
    },

    DELETE_COUP_SHOP: () => {
      return url + `/coup`
    },

    POST_ADDRESS_SHOP: () => {
      return url + `/address`
    },

    PATCH_ADDRESS_SHOP: () => {
      return url + `/address`
    },

    DELETE_ADDRESS_SHOP: () => {
      return url + `/address`
    },

    // Ticket
    GET_TICKETS: (userId: any) => {
        return url + `/ticket/${userId}`
    },

    POST_TICKET: () => {
        return url + `/ticket`
    },

    // Coupon
    GET_COUPONS: (userId: any) => {
        return url + `/coupon/${userId}`
    },

    POST_COUPON: () => {
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

    // Like
    GET_LIKE_PRODUCT: (productId: any) => {
        return url + `/like/list/productId?productId=${productId}`
    },

    CHECKING_LIKE_USER: (userId: any, productId: any) => {
        return url + `/like/checking?userId=${userId}&productId=${productId}`
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

    // Shop
    POST_SHOP: () => {
        return url + `/shop`
    },

    PATCH_SHOP: (_id: any) =>{
        return url + `/shop/${_id}`
    },

    GET_DETAIL_SHOP: (_id: any) => {
        return url + `/shop/${_id}`
    },

    GET_COUP_SHOP: (_id: any) => {
        return url + `/shop/${_id}`
    },

    // Category
    GET_CATEGORY: () => {
        return url + `/category`
    }
}

export default API
