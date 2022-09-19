//Date sorting in javascript

const employees = [
  { name: "Shyam", email: "shyam@gmail.com", dob: "22 aug 1990" },
  { name: "Shyam", email: "shyam@gmail.com", dob: "21 aug 1990" },

  { name: "Bob", email: "bob32@gmail.com", dob: "12 july 1986" },
  { name: "Jai", email: "jai87@gmail.com", dob: "05 april 1992" },
];

customSort = (a, b) => {
  const dateA = new Date(a.dob);
  const dateB = new Date(b.dob);
  if (dateA > dateB) return 1;
  else if (dateA < dateB) return -1;
  return 0;
};

console.log(employees.sort(customSort));
