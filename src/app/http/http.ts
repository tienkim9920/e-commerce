
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
    }

}

export default API