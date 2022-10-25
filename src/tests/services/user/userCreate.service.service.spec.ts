import { AppDataSource } from "./../../../data-source";
import { DataSource } from "typeorm";
import createUserService from "../../../services/createUser.service";

describe("Create an user", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  test("Should insert the information of new user in the database", async () => {
    const email = "email@mail.com";
    const name = "name";
    const password = "1234";

    const userData = { email, name, password };

    const newUser = createUserService(userData);

    expect(newUser).toEqual(
      expect.objectContaining({
        email,
        name,
        password,
      })
    );
  });
});
