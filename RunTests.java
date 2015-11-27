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
  }
}
