export class Flight{
    constructor(
        public id:string,
        public category:string,
        public type:string,
        public from:string,
        public to:string,
        public departureTime:string,
        public arrivalTime:string,
        public departureDate:Date,
        public arrivalDate:Date,
        public cost:number
    ){}
}
