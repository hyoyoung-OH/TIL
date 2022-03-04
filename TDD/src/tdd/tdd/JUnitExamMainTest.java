package tdd;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class JUnitExamMainTest {
    JUnitExamMain jem;

    @Test
    public void testAddWithNew() {
        System.out.println("testAddWithNew() start ...");

        assertEquals(jem.add(5), 10);

        System.out.println("testAddWithNew() end ...");
    }

    @Before
    public void setup() throws Exception {
        jem = new JUnitExamMain(5);
        System.out.println("setup() ...");
    }

    @After
    public void teardown() throws Exception {
        System.out.println("teardown() ...");
    }

    @Test
    public void testAddWithoutNew() {
        System.out.println("testAddWithoutNew() start ...");

        assertEquals(jem.add(5), 10);

        System.out.println("testAddWithoutNew() end ...");
    }

    @BeforeClass
    public static void setupBeforeClass() throws Exception {
        System.out.println("setupBeforeClass() ...");
    }

    @AfterClass
    public static void teardownAfterClass() throws Exception {
        System.out.println("teardownAfterClass() ...");
    }

}
