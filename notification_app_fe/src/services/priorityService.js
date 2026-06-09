import { TYPE_WEIGHTS } from "../constants/weights";

export const calculatePriority = (notification) => {
  const weight = TYPE_WEIGHTS[notification.Type] || 0;

  const timestamp = new Date(
    notification.Timestamp
  ).getTime();

  return weight * 1000000000000 + timestamp;
};

export const getTopNotifications = (
  notifications,
  limit = 10
) => {
  return [...notifications]
    .sort(
      (a, b) =>
        calculatePriority(b) -
        calculatePriority(a)
    )
    .slice(0, limit);
};