export const getWinRate = (battles: any) => {
  if (!!battles) {
    const totalBattles = battles.length;
    const win = battles.filter((item: any) => item.winner === 1).length;
    const percentage = (win/totalBattles) * 100;
    return `${win}/${totalBattles} (${percentage.toFixed()}%)`;
  }
  return '-';
}