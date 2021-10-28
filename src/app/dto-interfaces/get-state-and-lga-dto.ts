export interface LGA {
  id: string | number;
  name: string;
}
export interface GetStateAndLgaDto {
  name: string,
  id: string | number;
  locals: LGA[]
}
