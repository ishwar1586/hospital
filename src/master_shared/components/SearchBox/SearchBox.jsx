import { useState } from "react";
export default function SearchBox({value,onChange,placeholder="Search...",className=""}){const [local,setLocal]=useState("");const current=value??local;return <input className={className} value={current} placeholder={placeholder} onChange={e=>{setLocal(e.target.value);onChange?.(e.target.value);}} aria-label={placeholder}/>;}
