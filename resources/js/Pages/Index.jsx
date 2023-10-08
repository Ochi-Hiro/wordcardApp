import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Index = ({ auth, folders }) => {
  console.log(folders);

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="ホーム" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            {folders.map((folder) => (
              <p>{folder.name}</p>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
