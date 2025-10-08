function formatCurrency(value) {
  const absValue = Math.abs(value);
  let formatted;

  if (absValue >= 1_000_000_000_000) {
    formatted = Math.round(absValue / 1_000_000_000_000) + "T";
  } else if (absValue >= 1_000_000_000) {
    formatted = Math.round(absValue / 1_000_000_000) + "B";
  } else if (absValue >= 1_000_000) {
    formatted = Math.round(absValue / 1_000_000) + "M";
  } else if (absValue >= 1_000) {
    formatted = Math.round(absValue / 1_000) + "K";
  } else {
    formatted = Math.round(absValue).toString();
  }

  return `$${formatted}`;
}

export default formatCurrency;
