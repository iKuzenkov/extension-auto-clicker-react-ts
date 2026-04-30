async function getFetchData<T>(URL: string): Promise<T> {
  const res: Response = await fetch(URL);

  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`);
  }

  return (await res.json()) as T;
}

export default getFetchData;
