function getName(name) {
    return 'hihihi!' + name;
}
var userName = getName('YU');
console.log(userName);
var student = /** @class */ (function () {
    function student(name) {
        this.name = name;
        this.userName = name.firstName + name.lastName;
        this.firstName = name.firstName;
        this.lastName = name.lastName;
    }
    student.prototype.getLastName = function () {
        return this.name.lastName;
    };
    return student;
}());
var s = new student({
    firstName: 'yu',
    lastName: "zhilong"
});
function getUser(user) {
    return user.firstName + user.lastName;
}
getUser(s);
console.log(s.getLastName());
