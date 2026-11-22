export const cloneData=(value)=>value==null?value:structuredClone(value);
export const normalizeSearchValue=(value)=>String(value??"").trim().toLowerCase();
export const formatCurrency=(value,currency="INR")=>new Intl.NumberFormat("en-IN",{style:"currency",currency,maximumFractionDigits:2}).format(Number(value)||0);
export const formatDate=(value)=>value?new Intl.DateTimeFormat("en-IN").format(new Date(value)):"—";
export const calculateTotal=(items=[],field="amount")=>items.reduce((sum,item)=>sum+(Number(item?.[field])||0),0);
export const calculateVariance=(expected=0,actual=0)=>Number(actual)-Number(expected);
export const formatPercentage=(value,total)=>total?`${((Number(value)/Number(total))*100).toFixed(2)}%`:"0.00%";
export const validateRequired=(value)=>value!==undefined&&value!==null&&String(value).trim()!=="";
export default {cloneData,normalizeSearchValue,formatCurrency,formatDate,calculateTotal,calculateVariance,formatPercentage,validateRequired};
