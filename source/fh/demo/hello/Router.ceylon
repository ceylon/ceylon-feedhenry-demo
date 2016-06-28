shared dynamic Router {
  shared formal void use(Anything x);
  shared formal void get(String path, Anything(Request, Response) f);
  shared formal void post(String path, Anything(Request, Response) f);
}

shared dynamic Request {
  shared formal dynamic query;
  shared formal dynamic body;
}
shared dynamic Response {
  shared formal void json(dynamic obj);
}
