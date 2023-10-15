import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const createfolder = ({ auth }) => {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="フォルダ作成" />
      <div>createfolder</div>;
    </AuthenticatedLayout>
  );
};

export default createfolder;
