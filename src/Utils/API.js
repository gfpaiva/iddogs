const requestGet = async (URL) => {
  try {
    const res = await fetch(URL);

    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();

    if (data.error_message || data.erro) throw new Error();

    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
