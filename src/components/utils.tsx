import { DateTime } from "luxon";
export const PHP_PREFIX = '≈ ₱ ';

export const numberWithCommas = (x: any) => {
  var parts = x.toFixed().toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export const getTotalSlp = (slp: number, share: number) => {
  return parseInt(((share / 100) * slp).toFixed(), 10);
}

export const getAvg = (last_claim: number, slp: number) => {
  const now = DateTime.local();
  const lastClaim = DateTime.fromMillis(last_claim * 1000);
  return numberWithCommas(slp / Math.ceil(now.diff(lastClaim).shiftTo('days').toObject().days || 0));
}

export const getSlpAndPrice = (data: any, slpPrice: any, slpToGet: string) => {
  const totalAvg = !!data ? data.reduce((sum: number, cur: any) => 
    sum + cur[slpToGet], 0) : 0
  return {
    value: numberWithCommas(totalAvg),
    subValue: `${PHP_PREFIX}${numberWithCommas(totalAvg * slpPrice)}`
  };
}

export const getTotaDashboardlSlp = (data: any, slpPrice: any) => {
  return getSlpAndPrice(data, slpPrice, 'total_slp');
}

export const getTotaDashboardlUnclaimedSlp = (data: any, slpPrice: any) => {
  return getSlpAndPrice(data, slpPrice, 'in_game_slp');
}

export const getTotaDashboardlClaimedSlp = (data: any, slpPrice: any) => {
  return getSlpAndPrice(data, slpPrice, 'ronin_slp');
}

export const getTotalAvg = (data: any, slpPrice: any) => {
  const totalAvg = !!data ? (data.reduce((sum: number, cur: any) => 
    sum + parseInt(getAvg(cur.last_claim, cur.in_game_slp), 10), 0) / data.length) : 0
  return {
    value: numberWithCommas(totalAvg),
    subValue: `${PHP_PREFIX}${numberWithCommas(totalAvg * slpPrice)}`
  };
}

export const getTotalIskoSlp = (data: any, slpPrice: any) => {
  const totalAvg = !!data ? data.reduce((sum: number, cur: any) => 
    sum + getTotalSlp(cur.total_slp, cur.share), 0) : 0
  return {
    value: numberWithCommas(totalAvg),
    subValue: `${PHP_PREFIX}${numberWithCommas(totalAvg * slpPrice)}`
  };
}

export const getTotalManagerSlp = (data: any, slpPrice: any) => {
  const totalAvg = !!data ? data.reduce((sum: number, cur: any) => 
    sum + getTotalSlp(cur.total_slp, cur.share === -1 ? 100 : 100 - cur.share), 0) : 0
  return {
    value: numberWithCommas(totalAvg),
    subValue: `${PHP_PREFIX}${numberWithCommas(totalAvg * slpPrice)}`
  };
}

