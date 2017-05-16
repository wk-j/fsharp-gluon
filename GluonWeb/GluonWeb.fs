module GluonWeb

open Gluon
open Owin
open System
open Microsoft.Owin.Hosting
open System.Web.Http

[<Remote(Verb="GET")>]
let hello() =
    "Hello, world"

[<Remote(Verb="GET")>]
let hi() =
    "Hi"

type HomeController() = 
    inherit ApiController() 

    [<HttpGet>]
    member this.Hi() = "Hi"

    [<HttpGet>]
    member this.Hello() = "Hello"

type Options = { id: RouteParameter }

type Startup() =
    member x.Configuration(app: IAppBuilder) =
        app.MapGluon() |> ignore

        let config = new HttpConfiguration()
        config.Routes.MapHttpRoute(
            name = "DefaultApi",
            routeTemplate = "api/{controller}/{action}/{id}",
            defaults = { id = RouteParameter.Optional }
        ) |> ignore
        app.UseWebApi(config) |> ignore

[<EntryPoint>]
let main argv =
    let baseAddress = "http://localhost:9000/"
    WebApp.Start<Startup>(url = baseAddress) |> ignore
    Console.ReadLine() |> ignore
    0 