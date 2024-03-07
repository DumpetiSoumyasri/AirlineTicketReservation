export class Flight{
    constructor(
        public id:number,
        public type:string,
        public from:string,
        public to:string,
        public departureTime:string,
        public arrivalTime:string,
        public departureDate:string,
        public arrivalDate:string,
    ){}
}

export class flight{
    constructor(
        public id:number,
        public type:string,
        public from:string,
        public to:string,
        public imageUrl:string,
        public departureTime:string,
        public arrivalTime:string,
        public departureDate:string,
        public arrivalDate:string
    ){}
}