package model;

import models.LocalGroup;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import play.test.WithApplication;

import javax.persistence.PersistenceException;
import java.util.List;

import static play.test.Helpers.fakeApplication;
import static play.test.Helpers.inMemoryDatabase;


public class LocalGroupTest extends WithApplication{


    @Before
    public void setUp() throws Exception {
        start(fakeApplication(inMemoryDatabase()));
    }


    @Test
    public void testAll() throws Exception {
    }

    @Test(expected=PersistenceException.class)
    public void testCreate() throws Exception {
        new LocalGroup("Start NTNU").save();
        LocalGroup start = LocalGroup.find.where().eq("name", "Start NTNU").findUnique();
        assertNotNull(start);
        assertEquals("startntnu", start.getId());
        assertEquals("Start NTNU", start.getName());
        assertNotEquals("Start NTNU", start.getId());
        assertEquals(LocalGroup.find.findList().size(), 1);

        new LocalGroup("Start NTNU").save();
        assertEquals(LocalGroup.find.findList().size(), 1);

        new LocalGroup("Start Norge").save();
        assertEquals(LocalGroup.find.findList().size(), 2);

        new LocalGroup(null).save();
        assertEquals(LocalGroup.find.findList().size(), 2);



    }

    @Test
    public void testDelete() throws Exception {

    }
}
