/**
 * Calculates the next payment date and final payment date
 * @param startDate - Optional start date to calculate from (defaults to today)
 * @param numberOfMonths - Number of monthly payments (defaults to 5)
 * @returns Object with formatted first and last payment dates
 */
export const getPaymentDates = (startDate?: Date, numberOfMonths?: number) => {
  const today = startDate || new Date();
  const payments = numberOfMonths ?? 5;

  // Get next payment date (1 month from start date)
  const nextPayment = new Date(today);
  nextPayment.setMonth(nextPayment.getMonth() + 1);

  const lastPayment = new Date(nextPayment);
  lastPayment.setMonth(lastPayment.getMonth() + (payments - 1));

  // Format dates as "Month Day" (e.g., "January 15")
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };

  return {
    firstPayment: formatDate(nextPayment),
    lastPayment: formatDate(lastPayment),
  };
};