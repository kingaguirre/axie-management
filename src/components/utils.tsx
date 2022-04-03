import { DateTime } from "luxon";
import { AVG_LIMIT } from './Main';
export const PHP_PREFIX = '≈ ₱ ';

export const numberWithCommas = (x: any) => {
  var parts = x.toFixed().toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export const isManager = (share: number) => {
  return share === -1;
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
    sum + getIskoSlp(cur), 0) : 0
  return {
    value: numberWithCommas(totalAvg),
    subValue: `${PHP_PREFIX}${numberWithCommas(totalAvg * slpPrice)}`
  };
}

export const getTotalManagerSlp = (data: any, slpPrice: any) => {
  const totalAvg = !!data ? data.reduce((sum: number, cur: any) => 
    sum + getManagerSlp(cur), 0) : 0
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

export const getQueryStringParams = (params: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(params);
}

export const getCalculatedShare = (value: any) => {
  const { last_claim, in_game_slp, share } = value;
  if (!!share) {
    return isManager(share) ? 0 : share;
  } else {
    return getAvg(last_claim, in_game_slp) >= AVG_LIMIT ? 60 : 50;
  }
};

export const getIskoSlp = (value: any) => {
  const { in_game_slp } = value;
  const calculatedShare = getCalculatedShare(value);
  return getTotalSlp(in_game_slp, calculatedShare);
};

export const getManagerSlp = (value: any) => {
  const { in_game_slp, share } = value;
  const calculatedShare = getCalculatedShare(value);
  return getTotalSlp(in_game_slp, isManager(share) ? 100 : 100 - calculatedShare);
};
