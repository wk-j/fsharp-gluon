import * as Gluon from "gluon-client";
export namespace GluonWeb {
  
    export namespace GluonApi {
      
        export var getPerson = Gluon.Internals.remoteMethod<(() => Promise<Gluon.Option<GluonWeb.GluonApi.Person []>>)>("GluonWeb.GluonApi.getPerson");
        export var hi = Gluon.Internals.remoteMethod<(() => Promise<Gluon.Option<string>>)>("GluonWeb.GluonApi.hi");
        export class Person {
          
            constructor(public Name: string, public Age: number) { }
            static fromJSON(json: any): Person {
              
                return Gluon.Internals.fromJSON("GluonWeb.GluonApi.Person", json);
            }
            toJSON(): any {
               return Gluon.Internals.toJSON("GluonWeb.GluonApi.Person", this);
            }
        }
        export var hello = Gluon.Internals.remoteMethod<(() => Promise<Gluon.Option<string>>)>("GluonWeb.GluonApi.hello");
    }
}
Gluon.Internals.registerService({"Methods":[{"CallingConvention":["HttpCallingConvention",["Get"],"GluonApi/hello"],"MethodName":"GluonWeb.GluonApi.hello","MethodParameters":[],"MethodReturnType":[["StringType"]]},{"CallingConvention":["HttpCallingConvention",["Get"],"GluonApi/hi"],"MethodName":"GluonWeb.GluonApi.hi","MethodParameters":[],"MethodReturnType":[["StringType"]]},{"CallingConvention":["HttpCallingConvention",["Get"],"GluonApi/getPerson"],"MethodName":"GluonWeb.GluonApi.getPerson","MethodParameters":[],"MethodReturnType":[["ListType",["TypeReference","GluonWeb.GluonApi.Person"]]]}],"TypeDefinitions":[["DefineRecord",{"RecordName":"GluonWeb.GluonApi.Person","RecordFields":[{"FieldName":"Name","FieldType":["StringType"]},{"FieldName":"Age","FieldType":["IntType"]}]}]]});
Gluon.Internals.registerActivators({
  "GluonWeb.GluonApi.Person": (a: string, b: number) => new GluonWeb.GluonApi.Person(a, b)
});
