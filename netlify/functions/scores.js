exports.handler = async (event) => {
  const apiKey = process.env.NOCODB_API_KEY; // API key
  const dbUrl = process.env.NOCODB_URL; // URL for NocoDB database

  const options = {
    method: "GET",
    headers: { "xc-token": apiKey },
  };

  try {
    const response = await fetch(
      dbUrl,
      options,
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("Failed to fetch from NoCoDB:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch scores" }),
    };
  }
};
