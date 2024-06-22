import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CoachLoginPage from './Coach/CoachLoginPage';
import PlayerLoginPage from './Player/PlayerLoginPage';
import ScoutLoginPage from './Scout/ScoutLoginPage';

const SignInSelectPage: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  const handleDivClick = (path: any) => {
    setSelectedPath(path);
  };

  const handleNextClick = () => {
    if (selectedPath) {
      navigate(`?type=${selectedPath}`);
    } else {
      alert('Please select an option first');
    }
  };
  if (!type || !["coach", "player", "scout"].includes(type) ) {
    return (
      <div className="relative overflow-hidden bg-[#010e1d]/[0.84] px-32 pb-32">
        <div
          className="mx-auto mt-16 lg:mt-32 w-full max-w-screen-lg lg:max-w-screen-xl h-auto overflow-hidden rounded-[32px]"
          style={{
            background:
              'linear-gradient(135.01deg, rgba(248,248,255,0.96) -38.3%, rgba(25,43,77,0.48) 201.74%)',
          }}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 p-4 lg:p-12">
            <div
              className={`flex flex-col justify-start items-center gap-4 p-4 cursor-pointer}`}
              onClick={() => handleDivClick('player')}
            >
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="flex justify-center w-full h-full overflow-hidden rounded-full bg-white pt-6">
                  <img
                    src="_f01daf4f-70cd-44e5-ab9e-c269eb91d927-1.png"
                    className="w-3/4 h-3/4 object-cover"
                  />
                </div>
                {selectedPath === "player" ? (
                  <svg width="{25}" height="{24}" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute bottom-0 right-0" preserveAspectRatio="none"><circle cx="12.5" cy="{12}" r="{12}" fill="#169A01"/><path d="M17.3519 7.45972L10.1519 14.7116L7.42884 11.9886L6.40192 13.0155L9.63269 16.2463C9.77692 16.3905 9.97307 16.5059 10.1461 16.5059C10.3192 16.5059 10.5096 16.3905 10.6538 16.252L18.3673 8.49818L17.3519 7.45972Z" fill="#FDFDFD"/><path d="M12.5 0C5.87115 0 0.5 5.37115 0.5 12C0.5 18.6288 5.87115 24 12.5 24C19.1288 24 24.5 18.6288 24.5 12C24.5 5.37115 19.1288 0 12.5 0ZM12.5 23.0019C6.43654 23.0019 1.49808 18.0692 1.49808 12C1.49808 5.93654 6.43077 0.998077 12.5 0.998077C18.5635 0.998077 23.5019 5.93077 23.5019 12C23.5019 18.0635 18.5635 23.0019 12.5 23.0019Z" fill="#FDFDFD"/></svg>
                ) : (<div></div>)}
              </div>
              <div className="flex flex-col justify-start items-center gap-2">
                <p className="text-lg font-bold text-center text-black/[0.72]">Player</p>
                <p className="w-full lg:w-[177px] text-sm text-center text-black">
                  Actively participate in sports, utilizing skills and physical abilities.
                </p>
              </div>
            </div>
  
            <div
              className={`flex flex-col justify-start items-center gap-4 p-4 rounded-lg cursor-pointer }`}
              onClick={() => handleDivClick('coach')}
            >
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="flex justify-center w-full h-full overflow-hidden rounded-full bg-white pt-6">
                  <img
                    src="_a886120b-a28a-42e2-b365-d2435d9da6f5.png"
                    className="w-3/4 h-3/4 object-cover"
                  />
                </div>
                {selectedPath === "coach" ? (
                  <svg width="{25}" height="{24}" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute bottom-0 right-0" preserveAspectRatio="none"><circle cx="12.5" cy="{12}" r="{12}" fill="#169A01"/><path d="M17.3519 7.45972L10.1519 14.7116L7.42884 11.9886L6.40192 13.0155L9.63269 16.2463C9.77692 16.3905 9.97307 16.5059 10.1461 16.5059C10.3192 16.5059 10.5096 16.3905 10.6538 16.252L18.3673 8.49818L17.3519 7.45972Z" fill="#FDFDFD"/><path d="M12.5 0C5.87115 0 0.5 5.37115 0.5 12C0.5 18.6288 5.87115 24 12.5 24C19.1288 24 24.5 18.6288 24.5 12C24.5 5.37115 19.1288 0 12.5 0ZM12.5 23.0019C6.43654 23.0019 1.49808 18.0692 1.49808 12C1.49808 5.93654 6.43077 0.998077 12.5 0.998077C18.5635 0.998077 23.5019 5.93077 23.5019 12C23.5019 18.0635 18.5635 23.0019 12.5 23.0019Z" fill="#FDFDFD"/></svg>
                ) : (<div></div>)}
              </div>
              <div className="flex flex-col justify-start items-center gap-2">
                <p className="text-lg font-bold text-center text-black">Coach</p>
                <p className="w-full lg:w-[177px] text-sm text-center text-black">
                  Guides and mentors athletes to enhance their performance.
                </p>
              </div>
            </div>
  
            <div
              className={`flex flex-col justify-start items-center gap-4 p-4 cursor-pointer }`}
              onClick={() => handleDivClick('scout')}
            >
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="flex justify-center w-full h-full overflow-hidden rounded-full bg-white pt-6">
                  <img
                    src="_f01daf4f-70cd-44e5-ab9e-c269eb91d927-3.png"
                    className="w-3/4 h-3/4 object-cover"
                  />
                </div>
                {selectedPath === "scout" ? (
                  <svg width="{25}" height="{24}" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute bottom-0 right-0" preserveAspectRatio="none"><circle cx="12.5" cy="{12}" r="{12}" fill="#169A01"/><path d="M17.3519 7.45972L10.1519 14.7116L7.42884 11.9886L6.40192 13.0155L9.63269 16.2463C9.77692 16.3905 9.97307 16.5059 10.1461 16.5059C10.3192 16.5059 10.5096 16.3905 10.6538 16.252L18.3673 8.49818L17.3519 7.45972Z" fill="#FDFDFD"/><path d="M12.5 0C5.87115 0 0.5 5.37115 0.5 12C0.5 18.6288 5.87115 24 12.5 24C19.1288 24 24.5 18.6288 24.5 12C24.5 5.37115 19.1288 0 12.5 0ZM12.5 23.0019C6.43654 23.0019 1.49808 18.0692 1.49808 12C1.49808 5.93654 6.43077 0.998077 12.5 0.998077C18.5635 0.998077 23.5019 5.93077 23.5019 12C23.5019 18.0635 18.5635 23.0019 12.5 23.0019Z" fill="#FDFDFD"/></svg>
                ) : (<div></div>)}
              </div>
              <div className="flex flex-col justify-start items-center gap-2">
                <p className="text-lg font-bold text-center text-black/[0.72]">Scout</p>
                <p className="w-full lg:w-[177px] text-sm text-center text-black/[0.72]">
                  Provide recommendations for recruitment and team development.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-between items-center lg:items-start lg:mx-32 gap-4 lg:gap-16 py-8">
            <div
              className="flex justify-center items-center w-32 lg:w-[188px] h-10 lg:h-12 gap-2.5 px-6 py-2.5 rounded-[20px] border border-black/80 cursor-pointer"
              style={{ filter: 'drop-shadow(0px 16px 24px rgba(0,0,0,0.14))' }}
            >
              <p className="opacity-[0.72] text-xl lg:text-2xl font-semibold text-center text-black">Back</p>
            </div>
            <div
              className="flex justify-center items-center w-32 lg:w-[188px] h-10 lg:h-12 gap-2.5 px-6 py-2.5 rounded-[20px] bg-[#f2a725] cursor-pointer"
              style={{ boxShadow: '0px 16px 24px rgba(0,0,0,0.14)' }}
              onClick={handleNextClick}
            >
              <p className="text-xl lg:text-2xl font-semibold text-center text-black">Next</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    switch (type) {
      case ("coach") : return <CoachLoginPage />
      case ("player") : return <PlayerLoginPage />
      case ("scout") : return <ScoutLoginPage />
   }
  };
}

export default SignInSelectPage;
