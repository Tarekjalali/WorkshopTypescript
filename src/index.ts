// var a : number = 5

// var b : string = "Tarek"

// var c : boolean = true
// var o: boolean = false
// alert("Hello Belhssane")

// var school : string = "GOMYCODE"

// var a  = [8,5,2,"ffff",222]

// var t : number[] = [4,58,78,7,"dddd"]
// var t : any[]  = ["vfd",44,"ff",88,true]
// var t : (number | boolean)[] = [555,true,555,""]
// var x : undefined = undefined
// var t : [number,boolean] = [44,true,4]

// const somme : (a : number,b:number)=> string       = (a,b)=>{
//     return (a+b).toString()
// }


// interface User{
//     name : string,
//     age : number,
//     email? : string
// }

// var newContact : User = {name : "Fedi", email : "Fedi@gmail.com", age : 55}

// var a : User = {name :"Mahmoud", age : 20} 

// var userMail : string|undefined = a.email
// var userMail : string = a.email!
// var userMail : string = a.email ?? "Fedi@gmail.com"

// var a : boolean | string = true
// var b : boolean | string = "Hello"
// var c : boolean | string = false

// type boolstri = boolean | string

// var a : boolstri = "ddd"

// type User = {
//     name : string,
//     age : number
// }


// var bookingStatus = 'initial'

// bookingStatus = 'Confirmed'


// if (bookingStatus == 'Confimed') {
//     console.log("v")
// }

// enum bookingStatus{
//     initial = "initial",
//     Confirmed = "Confirmed"
// }

// var  book = bookingStatus.initial

// book = bookingStatus.Confirmed

// if (book == bookingStatus.Confirmed) {
//     console.log("Hello Ala")
// }
// interface IUser{
//     sayHello : ()=> void
// }
// class User implements IUser{
//     name : string
//     age : number

//     constructor(name : string,age : number){
//         this.name = name
//         this.age = age
//     }
//     sayHello=()=> console.log('Hello Ala')
// }

// var newUser : User = { name : "Tarek", age : 55}


// interface Car{
//     marque : string,
//     price : number
// }


// var newCar : {[key : string] : any} = {marque :"DS", price : 650, nbrHor : 55}

// var newCar : {marque : string, price : number} = {marque :"DS", price : 650}


// interface Car {
//     [key : string] : any
// }

interface Car{
    marque : string,
    price : number
}

interface location{
    siege : string,
    numTel : number
}

interface Chauffeur extends Partial<Car> , Required<location>{

}

var newChauf : Chauffeur = {marque :"oo",siege :'lac',numTel : 555}
// interface carWithoutPrice extends Omit <Car , 'price'>{

// }

// var a : Car = {marque : "Ford",price : 44}
// var b : carWithoutPrice = {marque :'VW'}

// interface carWithPrice extends Pick <Car , 'price'>{

// }

// var c : carWithPrice = {price : 44}

