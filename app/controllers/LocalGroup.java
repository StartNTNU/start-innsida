package controllers;

import play.mvc.*;

public class LocalGroup extends Controller {

    /*
        returns all local groups
     */
    public static Result getAll(){
        return ok("hei start ntnu");
    }

    /*
        return the local group with the given parameter
     */
    public static Result getLocalGroup(String id){
        return ok("hello").as("application/json");
    }

    /*
     insert local group
      */
    public static Result insertLocalGroup(){
        return TODO;
    }

    /*
    update localgroup
     */

    public static Result updateLocalGroup(){
        return TODO;
    }


    /*
    delete localgroup
     */
    public static Result deleteLocalGroup(){
        return TODO;
    }



}
