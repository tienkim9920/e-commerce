
class Distance {

    from: Number
    to: Number
    price: Number

    constructor (from: Number, to: Number, price: Number){
        this.from = from
        this.to = to
        this.price = price
    }

    toJSON(){
        return {
            from: this.from,
            to: this.to,
            price: this.price
        }
    }

}

export default Distance