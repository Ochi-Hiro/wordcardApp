import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSwatchbook, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Index = ({ auth, folders }) => {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="ホーム" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="max-w-5xl flex flex-wrap mx-auto px-8 py-8">
              {folders.map((folder) => (
                <div
                  className="w-52 h-44 mx-4 mb-6 px-4 pt-4 border border-gray-300 rounded-lg"
                  key={folder.id}
                >
                  <p className="text-lg font-semibold text-gray-600 truncate pl-2">{folder.name}</p>
                  <div className="mt-2">
                    <button className="w-full rounded-lg bg-blue-400 hover:bg-blue-300 py-3">
                      <div className="flex justify-center text-white">
                        <FontAwesomeIcon icon={faSwatchbook} className="pr-2 mt-1" />
                        <p className="font-semibold">学習する</p>
                      </div>
                    </button>
                  </div>
                  <div className="flex mt-4">
                    <div className="w-32">
                      <button className="w-full rounded-lg bg-green-500 hover:bg-green-400 py-2">
                        <div className="flex justify-center text-white">
                          <FontAwesomeIcon icon={faPenToSquare} className="pr-2 mt-1" />
                          <p className="font-semibold">編集</p>
                        </div>
                      </button>
                    </div>
                    <div className="w-10 ml-3">
                      <button className="w-full rounded-lg bg-gray-400 hover:bg-gray-300 py-2">
                        <FontAwesomeIcon icon={faTrash} className="text-white mt-1" />
                      </button>
                    </div>
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
