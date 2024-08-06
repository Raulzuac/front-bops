// To parse this data:
//
//   import { Convert } from "./file";
//
//   const bopResponse = Convert.toBopResponse(json);

export interface BopResponse {
  depor_opos: number;
  num_page:   number;
  bopId:      string;
  content:    string;
  bop:        Bop;
}

export interface Bop {
  id:    string;
  place: string;
  date:  Date;
}
