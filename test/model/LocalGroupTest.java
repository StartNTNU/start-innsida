package model;

import models.LocalGroup;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import play.test.WithApplication;

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

    @Test
    public void testCreate() throws Exception {
        new LocalGroup("Start NTNU").save();
        LocalGroup start = LocalGroup.find.where().eq("name", "Start NTNU").findUnique();
        assertNotNull(start);
        assertEquals("startntnu",start.getId());


    }

    @Test
    public void testUpdate() throws Exception {

    }

    @Test
    public void testDelete() throws Exception {

    }
}
