import {
  getIskoSlp,
  isManager
} from '../utils';

export const filteredData = (values: any) => {
  const { data, sortBy, isAsc, searchText } = values;
  return !!data && !!data.length && data
  .filter((item: any) => item.name.toLowerCase().includes(searchText.toLowerCase()))
  .sort((a: any, b: any) => {
    if (sortBy === 'share_slp') {
      const valA = !!a.total_slp && a.total_slp !== 0 && (isManager(a.share) ? a.total_slp : getIskoSlp(a));
      const valB = !!b.total_slp && b.total_slp !== 0 && (isManager(b.share) ? b.total_slp : getIskoSlp(b));
      if (isAsc) {
        return valA < valB ? -1 : 1;
      } else {
        return valA > valB ? -1 : 1;
      }
    } else {
      const valA = !!a[sortBy] && a[sortBy] !== 0 && a[sortBy];
      const valB = !!b[sortBy] && b[sortBy] !== 0 && b[sortBy];
      if (typeof valA === 'string' && typeof valB === 'string') {
        const nameA = valA.toLowerCase();
        const nameB = valB.toLowerCase();
        if (isAsc) {
          return nameA !== nameB ? nameA < nameB ? -1 : 1 : 0;
        } else {
          return nameA !== nameB ? nameA > nameB ? -1 : 1 : 0;
        }
      } else {
        if (isAsc) {
          return valA !== valB ? valA < valB ? -1 : 1 : 0;
        } else {
          return valA !== valB ? valA > valB ? -1 : 1 : 0;
        }
      }
    }
  })
};
