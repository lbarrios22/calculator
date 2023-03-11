
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 300000,
    years: 5,
    rate: 2.4
  }
  expect(calculateMonthlyPayment(values)).toEqual('5310.99')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 1000,
    years: 6,
    rate: 5.4
  }
  expect(calculateMonthlyPayment(values)).toEqual('16.29')
});

it('should calculate to NaN', () => {
  const values = {
    amount: 0,
    years: 0,
    rate: 0
  }
  expect(calculateMonthlyPayment(values)).toEqual('NaN')
})
