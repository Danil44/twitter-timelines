const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("Timelines", () => {
  describe("GET /timelines", () => {
    it("should get all user timelines", done => {
      chai
        .request(app)
        .get("/timelines")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
});
