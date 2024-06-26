import { del, get1, patch, post } from "../utils/request";

export const getListCV = async (id) => {
  const result = await get1(`cv?idCompany=${id}`);
  return result;
};

export const getDetailCV = async (id) => {
  const result = await get1(`cv/${id}`);
  return result;
};

export const changeStatusCV = async (id, options) => {
  const result = await patch(`cv/${id}`, options);
  return result;
};

export const deleteCV = async (id) => {
  const result = await del(`cv/${id}`);
  return result;
};

export const createCV = async (options) => {
  const result = await post(`cv`, options);
  return result;
};