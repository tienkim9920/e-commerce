
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

    GET_LIKE_PRODUCT: (productId: any) => {
      return url + `/like/${productId}`
    },

    GET_DETAIL_ORDER: (_id: any) => {
      return url + `/order/${_id}`
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

    POST_DETAIL_PRODUCT: () => {
      return url + `/detail`
    },

    POST_TICKs: () => {
      return url + `/tick`
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

    POST_ADDRESS_SHOP: () => {
      return url + `/address`
    },

    PATCH_ADDRESS_SHOP: () => {
      return url + `/address`
    },

    DELETE_ADDRESS_SHOP: () => {
      return url + `/address`
    },
}

export default API
