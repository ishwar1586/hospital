import api from "./axios.config.js";
const authService={getSetupStatus:()=>api.get("/auth/setup-status"),createAdmin:(payload)=>api.post("/auth/setup",payload),login:(payload)=>api.post("/auth/login",payload),me:()=>api.get("/auth/me")};
export default authService;
