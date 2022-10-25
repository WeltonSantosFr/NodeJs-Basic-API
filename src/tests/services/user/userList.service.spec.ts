import { AppDataSource } from "./../../../data-source";
import { DataSource } from "typeorm";
import createUserService from "../../../services/createUser.service";
import listAllUsersService from "../../../services/listAllUsers.service";

describe("List All Users", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  test("Should list all users in the database", async () => {
    const userList = listAllUsersService();

    expect(userList).toHaveProperty("map");
  });
});
