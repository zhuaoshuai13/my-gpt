export interface BackMessageType {
  message: string;
  code: number;
  data: {
    role: string;
    content: string;
  };
}
