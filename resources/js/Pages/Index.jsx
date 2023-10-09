import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

const Index = ({ auth, folders }) => {
  console.log(folders);

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="ホーム" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="max-w-5xl flex flex-wrap mx-auto px-8 py-8">
              {folders.map((folder) => (
                <div className="w-52 h-40 mx-4 mb-6 px-4 py-3 border rounded-lg">
                  <p className="text-lg truncate pl-1">{folder.name}</p>
                  <div className="mt-2">
                    <PrimaryButton className="bg-blue-500 px-8">
                      <p className="text-base">学習する</p>
                    </PrimaryButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
