import { useQuery } from '@tanstack/react-query';
import * as React from 'react';

import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/Typography';
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout';
import { ApiReturn } from '@/types/api';
import { Film } from '@/types/entity/film';

export default withAuth(AdminDashboardPage, 'admin');

function AdminDashboardPage() {
  const { data: FilmData } = useQuery<ApiReturn<Film[]>>(['/films/all']);

  return (
    <DashboardLayout>
      <main className='dashboard-layout min-h-screen'>
        <header>
          <h1>Admin Dashboard</h1>
        </header>
        <body className='mt-4'>
          <Typography variant='h3'>List All Film</Typography>
          <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Title
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Slug
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Duration
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Genre
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Status
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {FilmData?.data?.map((film) => (
                  <tr
                    key={film.id}
                    className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'
                  >
                    <td className='scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {film.title}
                    </td>
                    <td>{film.slug}</td>
                    <td>{film.duration}</td>
                    <td>{film.genre}</td>
                    <td>{film.status}</td>
                    <td>
                      <button className='btn btn-primary'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </body>
      </main>
    </DashboardLayout>
  );
}
