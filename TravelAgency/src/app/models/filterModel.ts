import {CheckedPlace} from "./checkedPlace";


export class FilterOptions{

  public TopPrice = 0;
  public LowPrice = 0;

  public StartDate = "";
  public EndDate = "";

  public minGrade = 0;
  public maxGrade = 0;

  places : Array<CheckedPlace> = []
}
