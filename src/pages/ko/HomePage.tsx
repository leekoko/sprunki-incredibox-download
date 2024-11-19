import { Link } from 'react-router-dom';
import Navbar from '../../components/ko/Navbar';
import Footer from '../../components/ko/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">온라인에서 음악과 비트 만들기</h1>
              <p className="text-xl">지금 스프런키 인크레디박스를 다운로드하고 음악 여행을 시작하세요!</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">왜 스프런키 인크레디박스를 다운로드해야 할까요?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">스프런키로 창작하기</h3>
                <p>독특한 음악 걸작을 믹스하고 만들어보세요</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">창작물 공유하기</h3>
                <p>전 세계 커뮤니티와 비트를 공유하세요</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">즉시 다운로드 가능</h3>
                <p>언제 어디서나 음악을 만드세요 - 오프라인에서도 작동</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">프리미엄 기능</h3>
                <p>독점 콘텐츠를 잠금 해제하고 대회에 참가하세요</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
