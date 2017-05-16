module GluonWeb

open Gluon
open Owin
open System
open Microsoft.Owin.Hosting
open System.Web.Http
open Microsoft.Owin
open Microsoft.Owin.FileSystems
open Microsoft.Owin.StaticFiles
open System.Linq

module GluonApi =

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

        let names = (["index.html"]).ToList()

        let options = FileServerOptions()
        options.EnableDefaultFiles <- true
        options.DefaultFilesOptions.DefaultFileNames <- names 
        options.FileSystem <- PhysicalFileSystem("www")
        //app.UseStaticFiles(options) |> ignore
        app.UseFileServer(options) |> ignore

[<EntryPoint>]
let main argv =
    let baseAddress = "http://localhost:9000/"
    Console.WriteLine(baseAddress)
    
    WebApp.Start<Startup>(url = baseAddress) |> ignore
    Console.ReadLine() |> ignore
    0 