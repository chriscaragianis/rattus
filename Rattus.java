import java.util.Random;

class Rattus {

  private boolean[] agit;
  private final int agitDim = 5;
  private Random rand;

  public Rattus() {
    agit = new boolean[agitDim];
    rand = new Random();
  }
  public boolean[] getAgit(){
    return agit;
  }
  public void agitate(boolean direction) {
    int index = rand.nextInt(agitDim);
    int origin = index;
    do {
      if ((agit[index] && direction) || (!agit[index] && !direction)) {
        index = (index + 1) % agitDim;
      } else {
        agit[index] = direction;
        return;
      }
    } while (index != origin - 1);
  }
}
