import * as $ from "jquery";
import * as Gluon from "gluon-client";
import * as App from "./lib/GluonWeb";


$(document).ready(() => {
    var cli = new Gluon.Client();
    App.GluonWeb.GluonApi.hello(cli)().then(rs => {
        console.log(rs)
    });
});
