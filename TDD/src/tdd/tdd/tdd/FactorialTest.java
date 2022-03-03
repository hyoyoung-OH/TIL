package tdd;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class FactorialTest {

    Factorial fac;

    @Before
    public void setup() {
        fac = new Factorial();
    }

    @Test
    public void shouldReturnOneWhenZeroIn() {
        // Factorial fac = new Factorial();
        assertEquals(1, fac.calc(0));
    }

    @Test
    public void shouldReturnOneWhenOneIn() {
        // Factorial fac = new Factorial();
        assertEquals(1, fac.calc(1));
    }

    @Test
    public void shouldReturnTwoWhenTwoIn() {
        assertEquals(2, fac.calc(2));
    }


}