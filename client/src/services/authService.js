export const logIn = async (googleData) => {
  const res = await fetch('http://127.0.0.1:3000/api/login-google', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    console.log(`${res.status} - ${res.statusText}`);
    throw new Error(res.status);
  }
};
