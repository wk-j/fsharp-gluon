import * as Gluon from "gluon-client";
export namespace GluonWeb {
  
    export var hello = Gluon.Internals.remoteMethod<(() => Promise<Gluon.Option<string>>)>("GluonWeb.hello");
    export var hi = Gluon.Internals.remoteMethod<(() => Promise<Gluon.Option<string>>)>("GluonWeb.hi");
}
Gluon.Internals.registerService({"Methods":[{"CallingConvention":["HttpCallingConvention",["Get"],"GluonWeb/hello"],"MethodName":"GluonWeb.hello","MethodParameters":[],"MethodReturnType":[["StringType"]]},{"CallingConvention":["HttpCallingConvention",["Get"],"GluonWeb/hi"],"MethodName":"GluonWeb.hi","MethodParameters":[],"MethodReturnType":[["StringType"]]}],"TypeDefinitions":[]});
Gluon.Internals.registerActivators({});
