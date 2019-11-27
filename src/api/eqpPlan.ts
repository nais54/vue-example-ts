import request from "./../utils/request";

export async function SelectEqpPlan(versionNo: string) {
  return await request("/api/SelectEqpPlan", "post", { versionNo });
}
