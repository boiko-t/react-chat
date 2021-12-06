export const logIn = async (googleData) => {
  const res = await fetch('http://127.0.0.1:3000/api/v1/auth/google', {
    method: 'POST',
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  // sessionStorage.setItem('userId', data._id);
  return data;
};
