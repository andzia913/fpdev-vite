type RoundMode = "none" | "100" | "1000" | "10000";

export const calculatePrice = (
  surface: number,
  pricePerMeter: number,
  round: RoundMode = "none"
) => {
  const raw = surface * pricePerMeter;

  if (round === "none") return Math.round(raw);

  const step = Number(round);

  return Math.round(raw / step) * step;
};

export const formatPrice = (val?: number | string) => {
  const num = Number(val);

  if (!num && num !== 0) return "—";

  return num.toLocaleString("pl-PL");
};