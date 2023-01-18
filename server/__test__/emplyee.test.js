const User = require("../models/user");
const Role = require("../models/role");
const mailer = require("../middleware/mailer");
const bcrypt = require("bcryptjs");
const Generate_password_secure = require("secure-random-password");
let Storage = require("local-storage");
const ErrorResponse = require("../utils/error");
const User_role = require("../models/user-role");
const AddEmployee = require("../controllers/employéesController");

jest.mock("../middleware/mailer", () => ({
  main: jest.fn(),
}));

describe("AddEmployee", () => {
  const req = {
    body: {
      lastName: "wassim",
      email: "wassims@example.com",
      firstName: "John",
    },
  };
  const res = {
    json: jest.fn(),
  };
  const next = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("creates a new user and sends an email", async () => {
    // mock the findOne method to return null
    User.findOne = jest.fn().mockResolvedValue(null);
    // mock the create method to return a user object
    User.create = jest.fn().mockResolvedValue({ id: 1 });
    // mock the findOne method to return a role object
    Role.findOne = jest.fn().mockResolvedValue({ id: 1 });
    // mock the hash method to return a hashed password
    bcrypt.hash = jest.fn().mockResolvedValue("hashed_password");
    // mock the create method to return a user_role object
    User_role.create = jest.fn().mockResolvedValue({});
    // mock the storage method
    Storage = jest.fn();
    await AddEmployee(req, res, next);
    expect(User.findOne).toHaveBeenCalledWith({
      where: { email: "johndoe@example.com" },
    });
    expect(bcrypt.hash).toHaveBeenCalledWith("hashed_password", 10);
    expect(Role.findOne).toHaveBeenCalledWith({ where: { name: "employe" } });
    expect(User.create).toHaveBeenCalledWith({
      lastName: "Doe",
      email: "johndoe@example.com",
      firstName: "John",
      password: "hashed_password",
    });
    expect(User_role.create).toHaveBeenCalledWith({ userId: 1, roleId: 1 });
    expect(mailer.main).toHaveBeenCalledWith("AddEmployee", { id: 1 });
    expect(Storage).toHaveBeenCalledWith("stockPassword", "hashed_password");
    expect(res.json).toHaveBeenCalledWith({ id: 1 });
  });

  it("returns an error if the emailalready exists in the database", async () => {
    // mock the findOne method to return a user object
    User.findOne = jest.fn().mockResolvedValue({ id: 1 });
    await AddEmployee(req, res, next);
    expect(next).toHaveBeenCalledWith(
      new ErrorResponse("il ya déja un Employé avec cet email", 401)
    );
  });

  it("returns an error if the user is not created", async () => {
    // mock the findOne method to return null
    User.findOne = jest.fn().mockResolvedValue(null);
    // mock the create method to return null
    User.create = jest.fn().mockResolvedValue(null);
    await AddEmployee(req, res, next);
    expect(next).toHaveBeenCalledWith(
      new ErrorResponse("user non creer ", 401)
    );
  });

  it("returns an error if the role_user is not created", async () => {
    // mock the findOne method to return null
    User.findOne = jest.fn().mockResolvedValue(null);
    // mock the create method to return a user object
    User.create = jest.fn().mockResolvedValue({ id: 1 });
    // mock the findOne method to return a role object
    Role.findOne = jest.fn().mockResolvedValue({ id: 1 });
    // mock the hash method to return a hashed password
    bcrypt.hash = jest.fn().mockResolvedValue("hashed_password");
    // mock the create method to return null
    User_role.create = jest.fn().mockResolvedValue(null);
    await AddEmployee(req, res, next);
    expect(next).toHaveBeenCalledWith(
      new ErrorResponse("role_user non creer", 401)
    );
  });
});