import express { ERouter=Router }
import cors { cors }
import body.parser { bodyParser }

shared Router helloRoute() {
  Router hello;
  dynamic {
    dynamic shit = ERouter();
    hello = shit;
    hello.use(cors());
    hello.use(bodyParser());
  }

  // GET REST endpoint - query params may or may not be populated
  hello.get("/", (req, res) {
    //var world = req.query && req.query.hello ? req.query.hello : 'World';

    // see http://expressjs.com/4x/api.html#res.json
    dynamic {
      print("In hello route GET / req.query=``req.query``");
      String world = req.query?.hello else "World";
      res.json(dynamic[msg="Hello ``world``";]);
    }
  });

  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  hello.post("/", (req, res) {
    dynamic {
      print("In hello route POST / req.body=``req.body``");
      String world = req.body?.hello else "World";
      //var world = req.body && req.body.hello ? req.body.hello : 'World';
      res.json(dynamic[msg="Hello ``world``";]);
    }
  });
  return hello;
}