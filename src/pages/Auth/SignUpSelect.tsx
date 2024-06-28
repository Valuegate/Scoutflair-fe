import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CoachSignUp from './Coach/CoachSignUp';
import PlayerSignUp from './Player/PlayerSignUp';
import ScoutSignUp from './Scout/ScoutSignUp';
import checkmark from "../../assets/checkmark.svg"

const Home: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  const handleDivClick = (path: any) => {
    setSelectedPath(path);
  };

  const handleNextClick = () => {
    if (selectedPath) {
      navigate(`/intro?type=${selectedPath}`, {replace: true});
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
                  <img className='w-6 h-6 absolute bottom-0 right-0' src={checkmark} alt="" />
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
                  <img className='w-6 h-6 absolute bottom-0 right-0' src={checkmark} alt="" />
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
                  <img className='w-6 h-6 absolute bottom-0 right-0' src={checkmark} alt="" />
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
      case ("coach") : return <CoachSignUp />
      case ("player") : return <PlayerSignUp />
      case ("scout") : return <ScoutSignUp />
   }
  };
}

export default Home;
