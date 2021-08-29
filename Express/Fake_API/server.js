const express = require("express");
const app = express();
const faker = require("faker");
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const createUser = () => {
  const newUser = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
  return newUser;
};


const createCompany = () => {
  const newCompany = {
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
      county: faker.address.county(),
    },
  };
  return newCompany;
};


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  console.log("This is API route");
  res.send({ message: "Hello World, hello Japan" });
});

app.get("/api/users/new", (req, res) => {
  console.log("This is new user route");
  const thisUser = createUser();
  res.json({thisUser});
});

app.get("/api/companies/new", (req, res) => {
  console.log("This is companies route");
  const thisCompany = createCompany();
  res.send(thisCompany);
});

app.get("/api/user/company", (req, res) => {
  console.log("This is user and company API route");
  const thisUser = createUser();
  const thisCompany = createCompany();
  res.json({thisUser, thisCompany});
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
