import express { ExpressRouter=Router }
import cors { cors }
import body.parser { bodyParser }

shared Router helloRoute() {
  Router hello;
  dynamic {
    dynamic holder = ExpressRouter();
    hello = holder;
    hello.use(cors());
    hello.use(bodyParser());
  }

  // GET REST endpoint - query params may or may not be populated
  hello.get("/", (req, res) {
    // see http://expressjs.com/4x/api.html#res.json
    dynamic {
      dynamic query=req.query else "<undefined>";
      print("In hello route GET / req.query=``query``");
      String world = req.query?.hello else "World";
      res.json(dynamic[
                 msg="Hello ``world``";
                 ts=system.milliseconds;
      ]);
    }
  });

  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  hello.post("/", (req, res) {
    dynamic {
      dynamic body=req.body else "<undefined>";
      print("In hello route POST / req.body=``body``");
      String world = req.body?.hello else "World";
      res.json(dynamic[
                 msg="Hello ``world``";
                 ts=system.milliseconds;
      ]);
    }
  });
  return hello;
}
