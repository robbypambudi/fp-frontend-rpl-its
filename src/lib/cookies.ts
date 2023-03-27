import Cookies from 'universal-cookie';

const cookies = new Cookies();
export const getToken = (): string => {
  return cookies.get('@rpl/token');
};

export const setToken = (token: string) => {
  cookies.set('@rpl/token', token, {
    path: '/',
  });
};

export const removeToken = () => {
  cookies.remove('@rpl/token', {
    path: '/',
  });
};
