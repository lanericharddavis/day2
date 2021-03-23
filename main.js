console.log("Hello World")

let cabinet = {
  color: "white",
  shape: "square",
  hasKnobs: true,
  numKnobs: 3,
  contents: {
    door1: ["coffee", "filters", "nonDairyCreamer"],
    door2: ["forks", "spoons", "knives", "straws"],
    door3: ["cups", "bowls", "plates"]
  }
}

let welcomeMessage = "Today is a good day to Robot!"

function greet(name, title) {
  let greeting = `Hello ${title} ${name}! ${welcomeMessage}`
  return greeting
}

let n = "Lane"
let t = "Mr."

let laneGreeting = greet(n, t)
console.log(laneGreeting)


let members = ['tim', 'jim', 'mary', 'margie', 'ned']

let members2 = [
  { name: "bob", title: "mr." },
  { name: "hank", title: "mr." },
  { name: "rob", title: "mr." },
  { name: "tom", title: "mr." }
]

for (let i = 0; i < members.length; i++) {
  const member = members[i];
  console.log(greet(member))
}

for (let i = 0; i < members2.length; i++) {
  const member = members2[i];
  console.log(greet(member.name, member.title))
}


for (let i = 0; i < member2.length; i++) {
  const member = members2[i]
  console.log(greet(member.name, member.title))

}

members2.forEach(member => {
  console.log(greet(member.name, member.title))
});
