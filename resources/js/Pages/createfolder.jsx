import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';

const createfolder = ({ auth }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    folder_name: '',
    is_public: 0,
  });

  const submit = (e) => {
    e.preventDefault();
    if (confirm('入力内容でフォルダを作成します')) {
      post(route('folder.store'));
    }
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="フォルダ作成" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="max-w-xl mx-auto px-12 py-8">
              <form onSubmit={submit}>
                <div>
                  <InputLabel htmlFor="folder_name" value="フォルダ名" className="pl-2" />

                  <TextInput
                    id="folder_name"
                    name="folder_name"
                    value={data.folder_name}
                    className="mt-2 block w-full"
                    autoComplete="folder_name"
                    isFocused={true}
                    onChange={(e) => setData('folder_name', e.target.value)}
                    required
                  />
                  <InputError message={errors.folder_name} className="mt-2" />
                </div>

                <div className="mt-8">
                  <InputLabel htmlFor="is_public" value="公開設定" className="pl-2" />
                  <div className="flex mt-2">
                    <label className="ml-6">
                      <input
                        type="radio"
                        name="is_pulic"
                        value="1"
                        checked={data.is_public == 1}
                        onChange={(e) => setData('is_public', e.target.value)}
                      />
                      <span className="pl-1 text-base sm:text-lg text-gray-500">公開</span>
                    </label>
                    <label className="ml-20">
                      <input
                        type="radio"
                        name="is_pulic"
                        value="0"
                        checked={data.is_public == 0}
                        onChange={(e) => setData('is_public', e.target.value)}
                      />
                      <span className="pl-1 text-base sm:text-lg text-gray-500">非公開</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <PrimaryButton
                    disabled={processing}
                    className="bg-blue-500 hover:bg-blue-400 sm:text-base"
                  >
                    フォルダを登録する
                  </PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default createfolder;
