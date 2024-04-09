const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log("Promise resolved and HTTP status is successful");
      const jsonData = await response.json();
      return jsonData;
    } else {
      const errorMessage =
        response.status === 404
          ? "404, Not found"
          : response.status === 500
          ? "500, internal server error"
          : response.status;
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Fetch", error);
  }
};

export { fetchData };
