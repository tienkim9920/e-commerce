// const url = 'http://localhost:4000'
const url = 'https://tk-ecommerce.herokuapp.com'

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
      return url + `/address/${id}`
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

    PATCH_COUPON: (userId: any, coupId: any) => {
      return url + `/coupon/checking/update?userId=${userId}&coupId=${coupId}`
    },

    //REPUTATION
    GET_REPUTATION_SHOP:(query:any)=>{
      return url + `/reputation/detail${query}`
    },

    POST_REPUTATION: ()=>{
      return url + `/reputation`
    },

    DELETE_REPUTATION: (userId: any, shopId: any) => {
      return url + `/reputation/delete?userId=${userId}&shopId=${shopId}`
    },

    CHECKING_REPUTATION: (userId: any, shopId: any) => {
      return url + `/reputation/checking?userId=${userId}&shopId=${shopId}`
    },

    // Newfeed
    POST_NEWFEED:()=>{
      return url + `/newfeed`
    },

    GET_PAGINATION_NEWFEED: (page: any) => {
      return url + `/product/newfeed/pagination?page=${page}`
    },


    // Notification
    POST_NOTIFICATION:()=>{
      return url + `/notification`
    },


    // Option
    POST_OPTION: ()=>{
      return url + `/option`
    },

    PATCH_OPTION: (_id: any) => {
      return url + `/option/${_id}`
    },


    // Order
    GET_DETAIL_ORDER: (_id: any) => {
        return url + `/order/${_id}`
    },

    POST_ORDER: () => {
        return url + `/order`
    },

    PATCH_ORDER: (_id: any,query: any) => {
        return url + `/order/${_id}${query}`
    },

    GET_ORDER_USER:(userId: any) => {
      return url + `/order/user/${userId}`
    },

    GET_ORDER_SHOP:(userId: any,query: any) => {
      return url + `/order/shop/${userId}${query}`
    },

    GET_STATISTIC_SHOP: (shopId: any, query: any) => {
      return url + `/order/statistic/${shopId}?${query}`
    },


    // Detail
    GET_DETAIL_BY_ORDER: (orderId: any) => {
        return url + `/detail/order?orderId=${orderId}`
    },

    // Product
    GET_LIST_PRODUCT_BY_USERID: (shopId: any) => {
      return url + `/product/listProduct/${shopId}`
    },

    GET_PRODUCT_CATEGORY: (id: any, query: any)=>{
      return url + `/product/category/${id}${query}`
    },

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
    // POST_PRODUCT_SHOP: () => {
    //   return url + `/product`
    // },
    DELETE_PRODUCT_SHOP: (id: any) => {
      return url + `/product/${id}`
    },

    GET_PRODUCT_SEARCH: (word: any) => {
      return url + `/product/search/word?word=${word}`
    },

    PATCH_COUNT_COMMENT: (_id: any) => {
      return url + `/product/comment/${_id}`
    },

    PATCH_STOCK_PRODUCT: (productId: any) => {
      return url + `/product/status/stock/${productId}`
    },

    CHECKING_COUNT_OPTION_PRODUCT: (productId: any) => {
      return url + `/product/option/stock/${productId}`
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

    DELETE_LIKE: (userId: any, productId: any)=>{
        return url + `/like/delete?userId=${userId}&productId=${productId}`
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
    GET_SHOP: ()=>{
      return url + `/shop`
    },

    GET_SHOP_CATEGORY: (id:any,query: any)=>{
      return url + `/shop/category/${id}${query}`
    },

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
      return url + `/coup/detail/${shopId}`
    },

    GET_DETAIL_COUP_BY_COUPID: (_id: any) =>{
      return url + `/coup/${_id}`
    },

    POST_COUP_SHOP: () => {
      return url + `/coup`
    },

    PATCH_COUP_SHOP: (id: any) => {
      return url + `/coup/${id}`
    },

    DELETE_COUP_SHOP: (id: any) => {
      return url + `/coup/${id}`
    },

    GET_COUP_CODE: (code: any) => {
      return url + `/coup/${code}`
    },

    GET_DETAIL_SHOP_BY_USERID: (userId: any) => {
      return url + `/shop/detail/${userId}`
    },

    GET_PAGINATION_PRODUCT_SHOP: (page: any, shopId: any) => {
      return url + `/product/shop/pagination?page=${page}&shopId=${shopId}`
    },

    GET_ALL_PRODUCT_SHOP: (shopId: any, query: any) => {
      return url + `/product/listProduct/${shopId}?${query}`
    },

    GET_SALE_PRODUCT_SHOP: (shopId: any, query: any) => {
      return url + `/product/list/onsale/${shopId}?${query}`
    },

    GET_OUTSALE_PRODUCT_SHOP: (shopId: any, query: any) => {
      return url + `/product/list/outsale/${shopId}?${query}`
    },

    // Category
    GET_CATEGORY: () => {
        return url + `/category`
    },

    //Room
    GET_ROOM_SHOP: (shopId: any)=>{
      return url + `/room/list/shopId/${shopId}`
    },

    GET_CHECKING_ROOM: (clientId: any, shopId: any) => {
      return url + `/room/checking?clientId=${clientId}&shopId=${shopId}`
    },

    //Client
    GET_ROOM_CLIENT: (clientId: any)=>{
      return url + `/room/list/clientId/${clientId}`
    },

    POST_CLIENT:()=>{
      return url + `/client`
    },

    GET_DETAIL_CLIENT:(_id: any)=>{
      return url + `/client/${_id}`
    },

    PATCH_CLIENT_LIMIT: (userId: any) => {
      return url + `/client/${userId}`
    },

    PATCH_CLIENT_STATUS: (userId: any) => {
      return url + `/client/update/${userId}`
    },

    GET_CLIENT_STATUS: (code: any) => {
      return url + `/client/checking/cart?code=${code}`
    },

    // Payment
    GET_PAYMENT: () => {
      return url + `/pay`
    },

    // Note
    POST_NOTE: () => {
      return url + `/note`
    },

    // Checking
    POST_CHECKING: () => {
      return url + `/checking`
    },

    PATCH_CHECKING: (id: any) => {
      return url + `/checking/${id}`
    },

    PATCH_CHECKING_NOTICE: (_id: any) => {
      return url + `/checking/checking/${_id}`
    }
}

export default API
