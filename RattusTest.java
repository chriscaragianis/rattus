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
    return subject.getAgit().length == agitDim;
  }

  public boolean rattusStartsEmptyTest() {
    subject = new Rattus();
    return (countTrues(subject.getAgit()) == 0);
  }

  public boolean agitateTest() {
    boolean up;
    boolean down;
    subject = new Rattus();

    //Agitate empty array down
    subject.agitate(false);
    if (countTrues(subject.getAgit()) != 0) {
      return false;
    }

    //Agitate empty array up
    subject.agitate(true);
    if (countTrues(subject.getAgit()) != 1){
      return false;
    }

    //Agitate array with one true down
    subject.agitate(false);
    if (countTrues(subject.getAgit()) != 0){
      return false;
    }

    //Agitate full array up
    for (int i = 0; i < agitDim; i++) {
      subject.agitate(true);
    }
    subject.agitate(true);
    if (countTrues(subject.getAgit()) != 5) {
      return false;
    }

    return true;
  }
}
