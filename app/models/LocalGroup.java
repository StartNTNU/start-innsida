package models;

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

    public LocalGroup(String name) {
        this.name = name;
        this.id = this.name.replaceAll(" ", "").toLowerCase();
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }

    public static Finder<String,LocalGroup> find = new Finder(
            String.class, LocalGroup.class
    );

    public static List<LocalGroup> all(){
        return new ArrayList<LocalGroup>();
    }

    public static LocalGroup findOne(String name){
        return find.byId(name);
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
