var people = {
  name: "留一手",
  age: "19",
  say: function (name) {
    console.log(name);
  },
};

function add(x, y) {
  return x + y;
}
exports.people = people;
exports.add = add;
// module.exports = add;

console.log(exports === module.exports);
