package controllers;

import play.*;
import play.mvc.*;
import views.html.index;


public class Application extends Controller {
    /**
     * Will return the index.html web application
     * @return
     */
    public static Result index() {
        return ok(index.render());
    }

}
