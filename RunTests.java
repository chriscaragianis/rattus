import java.util.Scanner;
import java.util.Arrays;

class RunTests {

  public static void main(String[] args) {

    RattusTest test = new RattusTest();
    int passCount = 0;
    int testCount = 0;
    for (Test v : test.allTests) {
      testCount++;
      if (v.test()) {
        passCount++;
      }
    }
    System.out.println(passCount + " of " + testCount + " tests passing.");

    Rattus rat = new Rattus();
    Scanner input = new Scanner(System.in);
    while (true) {
      double message = input.nextDouble();
      rat.interpret(new double[] {message});
      System.out.println("\t" + Arrays.toString(rat.getAgit()));
    }
  }
}
