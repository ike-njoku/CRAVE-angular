export interface ServerResponseDTO {
  status: 'success' | 'failure',
  message: string,
  data: any
}
