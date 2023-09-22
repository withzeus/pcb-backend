import * as yup from "yup";
import * as AuthService from "../../services/auth/auth.service";
import { Request, Response } from "express";
import { logColors } from "../../../utils/visual/logging";

export const GetUsers = (_: Request, res: Response) => {
  const us = [
    { userName: "John Smith", userEmail: "smith@ex.com" },
    { userName: "Sumizu May", userEmail: "sumay@ex.com" },
  ];
  res.set("Content-type", "application/json");
  res.json(us);
};

export const CreateUser = async (req: Request, res: Response) => {
  const nUS = yup.object({
    userName: yup.string().required("user name is required"),
    userEmail: yup.string().email().required("email is required"),
    userPassword: yup.string().required("password is required"),
  });

  try {
    const nU = await nUS.validate(req.body);
    const cR = await AuthService.createUser(nU);
    if (cR === -1) {
      res.status(400);
      res.send({
        success: false,
        message: `Failed to create user ${nU.userName}`,
      });
    } else {
      res.status(201);
      res.send(cR);
    }
  } catch (err) {
    const m = err instanceof yup.ValidationError ? err.message : "";
    console.log(
      logColors.fg.red + "%s" + logColors.reset,
      `[error] 💀 Validation Error : ${m}`
    );
    res.status(400);
    res.send({
      success: false,
      message: m,
    });
  }
};
