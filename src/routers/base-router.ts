import { Router } from "express";

class BaseRouter {
  protected router: Router;

  constructor() {
    this.router = Router();
  }

  public init(): Router {
    throw new Error("Not implemtened");
  }
}

export default BaseRouter;
