import React from "react";
const tones={success:"#dcfce7",paid:"#dcfce7",failed:"#fee2e2",cancelled:"#fee2e2",pending:"#fef3c7",refunded:"#dbeafe"};
export default function StatusChip({status="pending"}){const key=String(status).toLowerCase();return <span style={{display:"inline-flex",padding:"4px 9px",borderRadius:999,fontSize:12,fontWeight:600,background:tones[key]||"#e2e8f0",color:"#1e293b",textTransform:"capitalize"}}>{String(status).replaceAll("_"," ")}</span>}
