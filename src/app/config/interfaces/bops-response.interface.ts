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
  pre_coincidence?: string;
  coincidence?:     string;
  post_coincidence?: string;
}

export interface Bop {
  id:    string;
  place: string;
  date:  Date;
}
