const members = [
    {
      name: "최원장",
      role: "tutor",
    },
    {
      name: "윤창식",
      role: "tutor",
    },
    {
      name: "김병연",
      role: "tutor",
    },
    {
      name: "박가현",
      role: "tutor",
    },
    {
      name: "김멍멍",
      role: "student",
    },
    {
      name: "이야옹",
      role: "student",
    },
  ];
  

function getStudents() {
  for (let x = 0; x < members.length; x++) {
    if (members[x].role === "tutor") {
      console.log(members[x].name);
    }
  }
}

getStudents();