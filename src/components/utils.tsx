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
  const avg = slp / getTotalDays(last_claim);
  if (!!avg) {
    return numberWithCommas(Math.floor(slp / getTotalDays(last_claim)));
  }
  return 0;
}

export const getTotalDays = (last_claim: number) => {
  if (!!last_claim) {
    const now = DateTime.local();
    const lastClaim = DateTime.fromMillis(last_claim * 1000);
    return Math.ceil(now.diff(lastClaim).shiftTo('days').toObject().days || 0);
  }
  return 0;
};

export const getSlpAndPrice = (data: any, slpPrice: any, slpToGetFirst: string, slpToGet: string) => {
  const totalAvg = !!data ? data.reduce((sum: number, cur: any) => 
    sum + (!!slpToGetFirst ? cur.slpData[slpToGetFirst] : cur[slpToGet]), 0) : 0
  return {
    value: numberWithCommas(totalAvg),
    subValue: `${PHP_PREFIX}${numberWithCommas(totalAvg * slpPrice)}`
  };
}

export const getTotaDashboardlSlp = (data: any, slpPrice: any) => {
  return getSlpAndPrice(data, slpPrice, 'totalSlp', 'total_slp');
}

export const getTotaDashboardlUnclaimedSlp = (data: any, slpPrice: any) => {
  return getSlpAndPrice(data, slpPrice, 'gameSlp', 'in_game_slp');
}

export const getTotaDashboardlClaimedSlp = (data: any, slpPrice: any) => {
  return getSlpAndPrice(data, slpPrice, 'roninSlp', 'ronin_slp');
}

export const getTotalAvg = (data: any, slpPrice: any) => {
  const totalAvg = !!data ? (data.reduce((sum: number, cur: any) => 
    sum + parseInt(getAvg(cur.slpData.lastClaim || cur.last_claim, cur.slpData.gameSlp || cur.in_game_slp), 10), 0) / data.length) : 0
  return {
    value: numberWithCommas(totalAvg),
    subValue: `${PHP_PREFIX}${numberWithCommas(totalAvg * slpPrice)}`
  };
}

export const getTotalIskoSlp = (data: any, slpPrice: any) => {
  const totalAvg = !!data ? data.reduce((sum: number, cur: any) => 
    sum + getTotalSlp(cur.slpData.totalSlp || cur.total_slp, cur.share), 0) : 0
  return {
    value: numberWithCommas(totalAvg),
    subValue: `${PHP_PREFIX}${numberWithCommas(totalAvg * slpPrice)}`
  };
}

export const getTotalManagerSlp = (data: any, slpPrice: any) => {
  const totalAvg = !!data ? data.reduce((sum: number, cur: any) => 
    sum + getTotalSlp(cur.slpData.totalSlp || cur.total_slp, cur.share === -1 ? 100 : 100 - cur.share), 0) : 0
  return {
    value: numberWithCommas(totalAvg),
    subValue: `${PHP_PREFIX}${numberWithCommas(totalAvg * slpPrice)}`
  };
}

export const copyToClipboard = (str: any) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};