import clsx from 'clsx';

import BaseDialog from '@/components/dialog/BaseDialog';
import DesktopNavigation from '@/layouts/Dashboard/DesktopNavigation';
import MobileNavigation from '@/layouts/Dashboard/MobileNavigation';
import useDialogStore from '@/store/useDialogStore';

type DashboardLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function DashboardLayout({
  children,
  className,
}: DashboardLayoutProps) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  return (
    <>
      <div className='min-h-full'>
        <DesktopNavigation />

        <div className='bg-[#303030] flex flex-col lg:pl-64'>
          <MobileNavigation />

          <main className={clsx(className, 'bg-slate-100')} tabIndex={-1}>
            {children}
          </main>

          <BaseDialog
            onClose={handleClose}
            onSubmit={handleSubmit}
            open={open}
            options={state}
          />
        </div>
      </div>
    </>
  );
}
