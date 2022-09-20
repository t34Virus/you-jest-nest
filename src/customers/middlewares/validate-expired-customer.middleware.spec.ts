import { ValidateExpiredCustomerMiddleware } from './validate-expired-customer.middleware';

describe('ValidateExpiredCustomerMiddleware', () => {
  it('should be defined', () => {
    expect(new ValidateExpiredCustomerMiddleware()).toBeDefined();
  });
});
