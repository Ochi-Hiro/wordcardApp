import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Welcome" />
      <div className="min-h-screen">
        <nav className="fixed op-0 h-20 w-full bg-white border-b-2 border-gray-200">
          <div className="flex justify-between max-w-7xl h-full mx-auto px-4">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex">
                  <ApplicationLogo className={'h-12'} />
                  <div className="pl-3 flex justify-center items-center">
                    <p className="text-2xl font-semibold text-gray-500">シンプル単語カード</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              {auth.user ? (
                <Link href={route('dashboard')}>
                  <button
                    className="px-12 py-1 border-2 rounded-lg 
                      border-blue-200 hover:border-blue-300
                      bg-blue-100 hover:bg-blue-200"
                  >
                    <p className="text-lg font-bold text-gray-500 hover:text-gray-800">ログイン</p>
                  </button>
                </Link>
              ) : (
                <>
                  <Link href={route('login')} className="mr-6">
                    <button
                      className="px-12 py-1 border-2 rounded-lg 
                      border-blue-200 hover:border-blue-300
                      bg-blue-100 hover:bg-blue-200"
                    >
                      <p className="text-lg font-bold text-gray-500 hover:text-gray-800">
                        ログイン
                      </p>
                    </button>
                  </Link>

                  <Link href={route('register')} className="mr-1">
                    <button
                      className="px-12 py-1 border-2 rounded-lg 
                      border-red-200 hover:border-red-300
                      bg-red-100 hover:bg-red-200"
                    >
                      <p className="text-lg font-bold text-gray-500 hover:text-gray-800">
                        新規登録
                      </p>
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
        <div className="bg-gray-100 h-full w-full">
          <div className="pt-32 pb-24 bg-white h-full max-w-xl mx-auto">
            <div className="flex justify-center">
              <ApplicationLogo className={'h-44'} />
            </div>
            <p className="flex justify-center mt-4 text-gray-600 text-4xl font-bold">
              シンプル単語カード
            </p>
            <div className="border-b-2 border-gray-300 mx-24 mt-4 bg-white">
              <p className="flex justify-center mt-12 text-gray-500 font-bold">
                テストや資格の勉強でお馴染みの単語カードを、
              </p>
              <p className="flex justify-center mt-2 mb-5 text-gray-500 font-bold">
                手軽に使えるシンプルなアプリケーションです！
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <Link href={route('login')} className="mr-8">
                <button
                  className="px-16 py-2 border-2 rounded-lg 
                      border-blue-200 hover:border-blue-300
                      bg-blue-100 hover:bg-blue-200"
                >
                  <p className="text-xl font-bold text-gray-500 hover:text-gray-800">ログイン</p>
                </button>
              </Link>

              <Link href={route('register')}>
                <button
                  className="px-16 py-2 border-2 rounded-lg 
                      border-red-200 hover:border-red-300
                      bg-red-100 hover:bg-red-200"
                >
                  <p className="text-xl font-bold text-gray-500 hover:text-gray-800">新規登録</p>
                </button>
              </Link>
            </div>
            <div className="flex justify-center mt-8 text-gray-200">
              <p>-----------------------------------------------------------------------------</p>
            </div>
            <div className="flex justify-center mt-16">
              <img src="/images/study.png" alt="勉強している人" className="h-40" />
            </div>
            <p className="flex justify-center mt-6 text-gray-600 text-2xl font-bold">
              空き時間で手軽に使える
            </p>
            <p className="flex justify-center mt-4 text-gray-500 font-bold">
              通勤・通学や、休み時間など
            </p>
            <p className="flex justify-center mt-2 text-gray-500 font-bold">
              いつでもどこでも手軽に使えます。
            </p>
            <div className="flex justify-center mt-16">
              <img src="/images/easy.png" alt="勉強している人" className="h-40" />
            </div>
            <p className="flex justify-center mt-6 text-gray-600 text-2xl font-bold">
              シンプルな操作
            </p>
            <p className="flex justify-center mt-4 text-gray-500 font-bold">
              実際の単語カードに近づけた簡単な操作で
            </p>
            <p className="flex justify-center mt-2 text-gray-500 font-bold">
              学習に専念することができます。
            </p>
            <div className="flex justify-center mt-12 text-gray-200">
              <p>-----------------------------------------------------------------------------</p>
            </div>
            <p className="flex justify-center mt-8 text-gray-600 text-2xl font-bold">
              新規登録はこちらから
            </p>
            <p className="flex justify-center mt-1 text-gray-500 font-bold">↓</p>
            <div className="flex justify-center mt-2">
              <Link href={route('register')}>
                <button
                  className="px-28 py-4 border-2 rounded-lg 
                      border-red-200 hover:border-red-300
                      bg-red-100 hover:bg-red-200"
                >
                  <p className="text-xl font-bold text-gray-500 hover:text-gray-800">新規登録</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <footer className="text-center h-8 border-t border-gray-300">
          <p>
            <small>© Hiroki Ochiai</small>
          </p>
        </footer>
      </div>
    </>
  );
}
