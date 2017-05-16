import * as Gluon from "gluon-client";
export namespace GluonWeb {
  
    export namespace GluonApi {
      
        export var hello = Gluon.Internals.remoteMethod<(() => Promise<Gluon.Option<string>>)>("GluonWeb.GluonApi.hello");
        export var hi = Gluon.Internals.remoteMethod<(() => Promise<Gluon.Option<string>>)>("GluonWeb.GluonApi.hi");
    }
}
Gluon.Internals.registerService({"Methods":[{"CallingConvention":["HttpCallingConvention",["Get"],"GluonApi/hello"],"MethodName":"GluonWeb.GluonApi.hello","MethodParameters":[],"MethodReturnType":[["StringType"]]},{"CallingConvention":["HttpCallingConvention",["Get"],"GluonApi/hi"],"MethodName":"GluonWeb.GluonApi.hi","MethodParameters":[],"MethodReturnType":[["StringType"]]}],"TypeDefinitions":[]});
Gluon.Internals.registerActivators({});
