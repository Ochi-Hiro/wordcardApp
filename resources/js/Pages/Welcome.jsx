import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

const Welcome = ({ auth }) => {
  return (
    <>
      <Head title="Welcome" />
      <div className="min-h-screen">
        <nav className="fixed op-0 h-16 md:h-20 w-full bg-gray-50 border">
          <div className="flex justify-between max-w-7xl h-full mx-auto px-4">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex">
                  <ApplicationLogo className={'h-8 md:h-12'} />
                  <div className="pl-3 flex justify-center items-center">
                    <p className="text-lg md:text-3xl font-semibold text-gray-600">
                      シンプル単語カード
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              {auth.user ? (
                <Link href={route('index')}>
                  <button
                    className=" px-4 md:px-12 py-2 rounded-lg 
                      bg-green-500 hover:bg-green-400"
                  >
                    <p className="md:text-lg font-bold text-white">ホーム画面へ</p>
                  </button>
                </Link>
              ) : (
                <>
                  <Link href={route('login')} className="mr-2 md:mr-6">
                    <button
                      className="px-2 md:px-12 py-2 rounded-lg 
                      bg-blue-400 hover:bg-blue-300"
                    >
                      <p className="md:text-lg font-bold text-white">ログイン</p>
                    </button>
                  </Link>

                  <Link href={route('register')} className="md:mr-1">
                    <button
                      className="px-2 md:px-12 py-2 rounded-lg 
                      bg-red-400 hover:bg-red-300"
                    >
                      <p className="md:text-lg font-bold text-white">新規登録</p>
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
        <div className="bg-gray-50 h-full w-full">
          <div className="pt-40 pb-24 bg-white h-full max-w-xl mx-auto">
            <div className="flex justify-center">
              <img src="/images/study.png" alt="本と人物の画像" className="h-48" />
            </div>
            <p className="flex justify-center mt-12 text-gray-600 text-4xl font-bold">
              シンプル単語カード
            </p>
            <p className="flex justify-center mt-12 text-gray-600 font-bold">
              受験や資格勉強でお馴染みの単語カードを
            </p>
            <p className="flex justify-center mt-2 text-gray-600 font-bold">
              ブラウザで手軽に使えるよう再現した
            </p>
            <p className="flex justify-center mt-2 text-gray-600 font-bold">
              シンプルな学習補助アプリケーションです!
            </p>

            <div className="flex justify-center mt-12 text-gray-200">
              <p>--------------------------------------------------------</p>
            </div>

            <div className="flex justify-center mt-12">
              <Link href={route('login')} className="mr-6 md:mr-8">
                <button
                  className="px-12 md:px-16 py-3 rounded-lg 
                      bg-blue-400 hover:bg-blue-300"
                >
                  <p className="text-xl font-bold text-white">ログイン</p>
                </button>
              </Link>

              <Link href={route('register')}>
                <button
                  className="px-12 md:px-16 py-3 rounded-lg 
                      bg-red-400 hover:bg-red-300"
                >
                  <p className="text-xl font-bold text-white">新規登録</p>
                </button>
              </Link>
            </div>
            <div className="flex justify-center mt-12 text-gray-200">
              <p>--------------------------------------------------------</p>
            </div>
            <div className="flex justify-center mt-20">
              <img src="/images/easy.png" alt="スマホを操作している人の画像" className="h-40" />
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
            <div className="flex justify-center mt-20">
              <img src="/images/smartphone.png" alt="スマホの画像" className="h-40" />
            </div>
            <p className="flex justify-center mt-6 text-gray-600 text-2xl font-bold">
              シンプルな操作
            </p>
            <p className="flex justify-center mt-4 text-gray-500 font-bold">
              実際の単語カードに近い簡単な操作で
            </p>
            <p className="flex justify-center mt-2 text-gray-500 font-bold">
              暗記学習に集中することができます。
            </p>
            <div className="flex justify-center mt-12 text-gray-200">
              <p>--------------------------------------------------------</p>
            </div>
            <p className="flex justify-center mt-8 text-gray-600 text-2xl font-bold">
              新規登録はこちら
            </p>
            <p className="flex justify-center text-gray-500 font-bold">↓</p>
            <div className="flex justify-center mt-1">
              <Link href={route('register')}>
                <button
                  className="px-28 py-4 rounded-lg 
                      bg-red-400 hover:bg-red-300"
                >
                  <p className="text-xl font-bold text-white">新規登録</p>
                </button>
              </Link>
            </div>
            <p className="flex justify-center mt-12 text-gray-600 text-2xl font-bold">
              登録済みの方はこちら
            </p>
            <p className="flex justify-center text-gray-500 font-bold">↓</p>
            <div className="flex justify-center mt-1">
              <Link href={route('login')}>
                <button
                  className="px-28 py-4 rounded-lg 
                      bg-blue-400 hover:bg-blue-300"
                >
                  <p className="text-xl font-bold text-white">ログイン</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <footer className="text-center h-8 bg-gray-50">
          <p>
            <small>© Hiroki Ochiai</small>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Welcome;
