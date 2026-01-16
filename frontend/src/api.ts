export const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:1888";

export const getAuthToken = () => localStorage.getItem("auth_token");

export const apiFetch = (path: string, options: RequestInit = {}) => {
  const headers = new Headers(options.headers || {});
  const token = getAuthToken();
  if (token) headers.set("authorization", `Bearer ${token}`);

  const hasBody = options.body !== undefined && options.body !== null;
  const isFormData = typeof FormData !== "undefined" && options.body instanceof FormData;
  if (hasBody && !isFormData && !headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }

  const url = path.startsWith("http") ? path : `${apiBase}${path}`;
  return fetch(url, { ...options, headers });
};
