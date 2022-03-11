const baseUrl = 'https://api.github.com';

export const searchUser = async (search) => {
  const respone = await fetch(`${baseUrl}/search/users?q=${search}`);
  const data = await respone.json();
  return data;
};

export const getUser = async (userName) => {
  const [userData, repoData] = await Promise.all([
    fetch(`${baseUrl}/users/${userName}`),
    fetch(`${baseUrl}/users/${userName}/repos`),
  ]);
  const repo = await repoData.json();
  const user = await userData.json();
  return { repo, user };
};
