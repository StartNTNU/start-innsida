package model;

import play.data.validation.Constraints;
import play.db.ebean.Model;

public class LocalGroup extends Model{

    private String name;

    @Constraints.Required
    private String id;

    public String getName() {
        return name;
    }

    public void setName(String name) {

        this.name = name;
    }

    public String getId() {
        return id;
    }

    private void setId(String id) {
        this.id = id;
    }
}
