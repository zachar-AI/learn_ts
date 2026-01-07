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

type User = {
  name: string;
  email: string;
  isActive: boolean
}

function createUser(user: User) {}

createUser({name: "", email: "", isActive: true})

export {}