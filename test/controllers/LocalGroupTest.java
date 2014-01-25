package controllers;
import org.junit.*;

import play.libs.F;
import play.mvc.*;
import play.test.TestBrowser;

import static org.fest.assertions.Assertions.assertThat;
import static play.test.Helpers.*;
import static org.fest.assertions.Assertions.*;


public class LocalGroupTest {

    @Test
    public void indexTest() {

    }

    @Test
    public void test() {
        running(testServer(3333, fakeApplication(inMemoryDatabase())), HTMLUNIT, new F.Callback<TestBrowser>() {
            public void invoke(TestBrowser browser) {
                browser.goTo("http://localhost:3333/localgroup");
                assertThat(browser.pageSource()).contains("hei start ntnu");
            }
        });
    }
}
