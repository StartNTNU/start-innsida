package model;

import play.data.validation.Constraints;
import play.db.ebean.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class LocalGroup extends Model{

    @Constraints.Required
    private String name;

    @Id
    private String id;

    public static Finder<String,LocalGroup> find = new Finder(
            String.class, LocalGroup.class
    );

    public static List<LocalGroup> all(){
        return new ArrayList<LocalGroup>();
    }

    public static void create(LocalGroup localGroup){
       localGroup.save();
    }

    public static void update(LocalGroup localGroup){
        find.ref(localGroup.id).update();
    }

    public static void delete(LocalGroup localGroup){
        find.ref(localGroup.id).delete();

    }
}
