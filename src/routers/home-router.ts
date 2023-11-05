import BaseRouter from "./base-router";

class HomeRouter extends BaseRouter {
  public init() {
    this.router.get("/", (req, res) => {
      res.status(200).send({ message: "Hello World!" });
    });

    return this.router;
  }
}

export default HomeRouter;
