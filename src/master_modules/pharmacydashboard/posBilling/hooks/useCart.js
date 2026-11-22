import { useCallback, useEffect, useState } from "react";
import { createModuleService } from "@/master_app/services/clinical.service.js";
export function useClinicalResource(resource="patients",filters={}){const [data,setData]=useState([]);const [loading,setLoading]=useState(false);const [error,setError]=useState("");const reload=useCallback(async()=>{setLoading(true);setError("");try{const result=await createModuleService(resource).list(filters);setData(result.data?.data||[]);}catch(e){setError(e.response?.data?.message||e.message||"Request failed");}finally{setLoading(false);}},[resource,JSON.stringify(filters)]);useEffect(()=>{reload();},[reload]);return {data,loading,error,reload};}
export default useClinicalResource;
