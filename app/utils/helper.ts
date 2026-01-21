/**
 * Calculates the next payment date and final payment date
 * @param startDate - Optional start date to calculate from (defaults to today)
 * @returns Object with formatted first and last payment dates
 */
export const getPaymentDates = (startDate?: Date) => {
  const today = startDate || new Date();

  // Get next payment date (1 month from start date)
  const nextPayment = new Date(today);
  nextPayment.setMonth(nextPayment.getMonth() + 1);

  // Get last payment date (5 months after next payment = 6 months from start date)
  const lastPayment = new Date(nextPayment);
  lastPayment.setMonth(lastPayment.getMonth() + 5);

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