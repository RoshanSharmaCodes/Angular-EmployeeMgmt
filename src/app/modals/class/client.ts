export class Client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  EmployeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;

  constructor() {
    this.clientId = 0
    this.EmployeeStrength = 0
    this.gstNo = ""
    this.address = ""
    this.city = ""
    this.contactNo = ""
    this.regNo = ""
    this.pincode = ""
    this.state = ""
    this.contactPersonName = ""
    this.companyName = ""
  }
  
}
