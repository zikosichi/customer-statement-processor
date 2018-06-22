import { CustomerStatementModule } from './customer-statement.module';

describe('CustomerStatementModule', () => {
  let customerStatementModule: CustomerStatementModule;

  beforeEach(() => {
    customerStatementModule = new CustomerStatementModule();
  });

  it('should create an instance', () => {
    expect(customerStatementModule).toBeTruthy();
  });
});
