import express { ExpressRouter=Router }
import cors { cors }
import body.parser { bodyParser }

String titlecase(String s) =>
  sanitize(" ".join { for (w in s.split()) w.initial(1).uppercased+w[1...] });

String sanitize(String s) =>
  s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;");

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
      String world = req.query?.hello else "World";
      print("In hello route GET / ``world``");
      res.json(dynamic[
                 msg="Hello, ``titlecase(world)``!";
                 ts=system.milliseconds;
      ]);
    }
  });

  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  hello.post("/", (req, res) {
    dynamic {
      String world = req.body?.hello else "World";
      print("In hello route POST / ``world``");
      res.json(dynamic[
                 msg="Hello, ``titlecase(world)``!";
                 ts=system.milliseconds;
      ]);
    }
  });
  return hello;
}
