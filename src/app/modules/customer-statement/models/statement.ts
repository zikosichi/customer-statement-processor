export class Statement {
  reference: string;
  accountNumber: string;
  description: string;
  startBalance: number;
  mutation: number;
  endBalance: number;
  isInvalidBalance?: boolean;
  isDuplicate?: boolean;
}
