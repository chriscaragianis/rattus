class RattusTest {
  //Test class for Rattus

  private Rattus subject;
  private final int agitDim = 5;
  private int countTrues(boolean[] arr) {
    int count = 0;
    for (boolean v : arr){
      if (v) {
        count++;
      }
    }
    return count;
  }

  public RattusTest() {
    subject = new Rattus();
  }

  public boolean getAgitTest() {
    if (subject.getAgit().length == agitDim) {
      return true;
    } else {
      System.out.println("Expected agit length to equal " + agitDim);
      return false;
    }
  }

  public boolean rattusStartsEmptyTest() {
    subject = new Rattus();
    if (countTrues(subject.getAgit()) == 0) {
      return true;
    } else {
      System.out.println("Rattus did not start empty");
      return false;
    }
  }

  public boolean agitateTest() {
    boolean up;
    boolean down;
    subject = new Rattus();

    subject.agitate(false);
    System.out.println("\tAgitate empty array down...");
    if (countTrues(subject.getAgit()) != 0) {
      System.out.println("\tAgitate down from all false should return all false");
      return false;
    }

    subject.agitate(true);
    System.out.println("\tAgitate empty array up");
    if (countTrues(subject.getAgit()) != 1){
      System.out.println("\tAgitate up from all false should have 1 true");
      return false;
    }

    subject.agitate(false);
    System.out.println("\tAgitate array with one true down");
    if (countTrues(subject.getAgit()) != 0){
      System.out.println("\tAgitate down from 1 true should have no trues");
      return false;
    }

    for (int i = 0; i < agitDim; i++) {
      subject.agitate(true);
    }
    subject.agitate(true);
    System.out.println("\tAgitate full array up");
    if (countTrues(subject.getAgit()) != agitDim) {
      System.out.println("\tAgitate full array up should return full array");
      return false;
    }

    return true;
  }

  public boolean interpretTest() {
    subject = new Rattus();

    subject.interpret(new double[] {-2.4});
    if (countTrues(subject.getAgit()) != 1) {
      System.out.println("Did not agitate on input");
      return false;
    }

    subject.interpret(new double[] {0.6});
    if (countTrues(subject.getAgit()) != 0) {
      System.out.println("Did not deagitate on input");
      return false;
    }

    subject.agitate(true);
    subject.interpret(new double[] {0.7});
    if (countTrues(subject.getAgit()) != 1) {
      System.out.println("Improperly agitated");
      return false;
    }

    return true;
  }

  public Test[] allTests = new Test[] {
    new Test() {
      public boolean test() {
        System.out.println("getAgitTest...");
        return getAgitTest();
      }
    },
    new Test() {
      public boolean test() {
        System.out.println("rattusStartsEmptyTest...");
        return rattusStartsEmptyTest();
      }
    },
    new Test() {
      public boolean test() {
        System.out.println("agitateTest...");
        return agitateTest();
      }
    },
    new Test() {
      public boolean test() {
        System.out.println("interpretTest...");
        return interpretTest();
      }
    }
  };
}
