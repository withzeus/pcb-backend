import { Request, Response } from "express";

export const GetUsers = (_: Request, res: Response) => {
  const users = [
    { userName: "John Smith", userEmail: "smith@ex.com" },
    { userName: "Sumizu May", userEmail: "sumay@ex.com" },
  ];
  res.set("Content-type", "application/json");
  res.json(users);
};
