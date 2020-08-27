export class DynamicGrid {
  jobCode: string;
  itemCode: string;
  description: string;
  costcenter: string;
  amount: string;
  constructor(
    _jobcode: string,
    _itemCode: string,
    _description: string,
    _costcenter: string,
    _amount: string
  ) {
    this.jobCode = _jobcode;
    this.itemCode = _itemCode;
    this.description = _description;
    this.costcenter = _costcenter;
    this.amount = _amount;
  }
}
