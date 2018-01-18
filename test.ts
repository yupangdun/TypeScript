function getName(name: string) {
  return 'hihihi!' + name
}
let userName = getName('YU')
console.log(userName)

interface name {
  firstName: string,
  lastName: string
}

class student {
  userName: string
  firstName: string
  lastName: string
  constructor(public name: name) {
    this.userName = name.firstName + name.lastName
    this.firstName = name.firstName
    this.lastName = name.lastName
  }
  getLastName() {
    return this.name.lastName
  }
}

let s = new student({
  firstName: 'yu',
  lastName: "zhilong"
})

function getUser(user: name) {
  return user.firstName + user.lastName
}
getUser(s)
console.log(s.getLastName())
