export interface IMarketing {
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  phoneNumber: string;
  content: string;
}

export interface ICustomer extends Partial<IMarketing> {
  rentalLocation: string;
  rentalTime: string;
  returnLocation: string;
  returnTime: string;
}
export interface DataCardProps {
  imgSrc: string;
  title: string;
  list: string[];
}
