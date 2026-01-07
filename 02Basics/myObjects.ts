// const User = {
//   name: "zach",
//   email: "z@gmail.com",
//   isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {

// }

// let newUser = {name: "butt", isPaid: false, email: "abc@gmail.com"}

// createUser(newUser)

// function createCourse(): {name: "butt", isPaid: false}
// {
//   return {name: "butt", isPaid: false}
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean
// }

// function createUser(user: User) {}

// createUser({name: "", email: "", isActive: true})

type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  creditcardDetails?: number
}

let myUser: User = {
  _id: "12345",
  name: "h",
  email: "h@h.com",
  isActive: false
}

type cardNumber = {
  cardnumber: string

}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

myUser.email = "butt@gmail.com"

export {}