import { useRouter } from 'next/router';
import * as React from 'react';
import { ImSpinner8 } from 'react-icons/im';

import api from '@/lib/api';
import { getToken, removeToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn } from '@/types/api';
import { User } from '@/types/entity/user';

export interface WithAuthProps {
  user: User;
}

const USER_ROUTE = '/';
const ADMIN_ROUTE = '/';
const LOGIN_ROUTE = '/';

enum RouteRole {
  public,
  optional,
  user,
  admin,
}

export default function withAuth<T extends WithAuthProps = WithAuthProps>(
  Component: React.ComponentType<T>,
  routeRole: keyof typeof RouteRole
) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter();
    const { query } = router;

    //#region  //*=========== STORE ===========
    const isAuthenticated = useAuthStore.useIsAuthenticated();
    const isLoading = useAuthStore.useIsLoading();
    const login = useAuthStore.useLogin();
    const logout = useAuthStore.useLogout();
    const stopLoading = useAuthStore.useStopLoading();
    const user = useAuthStore.useUser();
    //#endregion  //*======== STORE ===========

    const checkAuth = React.useCallback(() => {
      const token = getToken();
      if (!token) {
        isAuthenticated && logout();
        stopLoading();
        return;
      }
      const loadUser = async () => {
        try {
          const res = await api.get<ApiReturn<User>>('/users/me');

          login({
            ...res.data.data,
            token: token + '',
          });
        } catch (err) {
          logout();
          removeToken();
        } finally {
          stopLoading();
        }
      };

      if (!isAuthenticated) {
        loadUser();
      }
    }, [isAuthenticated, login, logout, stopLoading]);

    React.useEffect(() => {
      // run checkAuth every page visit
      checkAuth();

      // run checkAuth every focus changes
      window.addEventListener('focus', checkAuth);
      return () => {
        window.removeEventListener('focus', checkAuth);
      };
    }, [checkAuth]);

    React.useEffect(() => {
      const Redirect = async () => {
        if (isAuthenticated) {
          // Jika ada user yang login akses public maka akan dipindah ke admin, user, atau forda
          if (routeRole === 'public') {
            if (query?.redirect) {
              router.replace(query.redirect as string);
            } else {
              if (user?.role === 'admin') {
                router.replace(
                  `${ADMIN_ROUTE}?redirect=${router.asPath}`,
                  `${ADMIN_ROUTE}`
                );
              } else {
                router.replace(USER_ROUTE);
              }
            }
            // Admin
          }
          // Jika ada user yang login akses user maka akan dipindah ke admin atau forda
          if (user?.role === 'user' && routeRole === 'admin') {
            await router.replace(USER_ROUTE);
          }
          // Jika ada user yang login akses admin maka akan dipindah ke user atau forda
          if (user?.role === 'admin' && routeRole === 'user') {
            await router.replace(ADMIN_ROUTE);
          }
        } else {
          // Prevent unauthenticated user from accessing protected pages
          if (
            routeRole !== 'public' &&
            routeRole !== 'admin' &&
            routeRole !== 'user'
          ) {
            router.replace(
              `${LOGIN_ROUTE}?redirect=${router.asPath}`,
              `${LOGIN_ROUTE}`
            );
          } else {
            // Prevent unauthenticated user from accessing protected pages
            if (
              routeRole !== 'public' &&
              routeRole !== 'admin' &&
              routeRole !== 'user'
            ) {
              router.replace(
                `${LOGIN_ROUTE}?redirect=${router.asPath}`,
                `${LOGIN_ROUTE}`
              );
            } else if (routeRole === 'admin' || routeRole === 'user') {
              router.replace(
                `${LOGIN_ROUTE}?redirect=${router.asPath}`,
                `${LOGIN_ROUTE}`
              );
            }
          }
        }
      };

      if (!isLoading) {
        // Dipangil disini
        Redirect();
      }
    }, [isAuthenticated, isLoading, query, router, user]);

    if (
      // If unauthenticated user want to access protected pages
      (isLoading || !isAuthenticated || !user?.role) &&
      // auth pages and optional pages are allowed to access without login
      routeRole !== 'public' &&
      routeRole !== 'optional'
    ) {
      return (
        <div className='flex min-h-screen flex-col items-center justify-center text-gray-800'>
          <ImSpinner8 className='mb-4 animate-spin text-4xl' />
          <p>Loading...</p>
        </div>
      );
    }

    return <Component {...(props as T)} user={user} />;
  };

  return ComponentWithAuth;
}
