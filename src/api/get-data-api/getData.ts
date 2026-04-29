async function getData<T>(URL: string): Promise<T> {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`);
  }

  return await res.json();
}

export default getData;
