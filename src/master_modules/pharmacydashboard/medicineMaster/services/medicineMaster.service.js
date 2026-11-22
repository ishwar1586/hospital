import { createModuleService } from "@/master_app/services/clinical.service.js";
const service=createModuleService("medicines");
export const getAll=(filters={})=>service.list(filters);
export const getById=(id)=>service.getById(id);
export const create=(payload)=>service.create(payload);
export const update=(id,payload)=>service.update(id,payload);
export const transition=(id,status,extra={})=>service.transition(id,status,extra);
export default service;
