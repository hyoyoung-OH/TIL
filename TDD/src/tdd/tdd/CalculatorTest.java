package tdd;

import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void sum() {
        Calculator cal = new Calculator();
        assertEquals(cal.sum(10, 20), 30);

    }
}