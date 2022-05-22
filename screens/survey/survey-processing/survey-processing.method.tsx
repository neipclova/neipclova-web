export const setBackground = (order: number) => {
  if (order < 2) {
    return 'linear-gradient(#0d6efd, #0dcaf0)';
  } else if (order < 4) {
    return 'linear-gradient(#0d6efd, #0dcaf0)';
  } else if (order < 7) {
    return 'linear-gradient(#1b1f69, #b96c87)';
  } else if (order < 10) {
    return 'linear-gradient(#1b1f69, #b96c87)';
  } else if (order < 13) {
    return 'linear-gradient(#1b1f69, #b96c87)';
  } else if (order < 16) {
    return 'linear-gradient(#1b1f69, #b96c87)';
  } else {
    return 'linear-gradient(#1b1f69, #b96c87)';
  }
};
