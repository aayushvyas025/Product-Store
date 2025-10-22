const envVariables = {
  backendBaseUrl:
    import.meta.env.VITE_MODE === "development"
      ? import.meta.env.VITE_BACKEND_URL
      : "/api/v1",
};

export default envVariables;
