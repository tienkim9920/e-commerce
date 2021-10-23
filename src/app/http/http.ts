
const url = 'http://localhost:4000'

const API = {
    
    // User
    GET_DETAIL_USER: (_id: any) => {
        return url + `/user/${_id}`
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

    // Category
    GET_CATEGORY: () => {
        return url + `/category`
    }

}

export default API