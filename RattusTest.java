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

    //Agitate empty array down
    subject.agitate(false);
    if (countTrues(subject.getAgit()) != 0) {
      System.out.println("Agitate down from all false should return all false");
      return false;
    }

    //Agitate empty array up
    subject.agitate(true);
    if (countTrues(subject.getAgit()) != 1){
      System.out.println("Agitate up from all false should have 1 true");
      return false;
    }

    //Agitate array with one true down
    subject.agitate(false);
    if (countTrues(subject.getAgit()) != 0){
      System.out.println("Agitate down from 1 true should have no trues");
      return false;
    }

    //Agitate full array up
    for (int i = 0; i < agitDim; i++) {
      subject.agitate(true);
    }
    subject.agitate(true);
    if (countTrues(subject.getAgit()) != agitDim) {
      System.out.println("Agitate full array up should return full array");
      return false;
    }

    return true;
  }

  public Test[] allTests = new Test[] {
    new Test() {public boolean test() {return getAgitTest();} },
    new Test() {public boolean test() {return rattusStartsEmptyTest();} },
    new Test() {public boolean test() {return agitateTest();} }
  };
}
