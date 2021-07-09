export const setCurrencySign = (value) => {
  switch (value) {
    case "USD":
      return "$";
    case "JPY":
      return "¥";
    case "GBP":
      return "£";
    case "RUB":
      return "₽";
    case "AUD":
      return "$";
    default:
      return value;
  }
};
