import React, { useState } from 'react';
import Scoutflairlogo from '../../assets/Scoutflairlogo.svg';  // Adjust the import path to your logo

const PasswordResetPage: React.FC = () => {
  const [Email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ Email?: string}>({});

  const newErrors: { Email?: string} = {};

  const validateForm = () => {
    if (!Email) {
      newErrors.Email = "Email is required"
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // proceed with form submission (e.g., API call)
      console.log('Form is valid');
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/path/to/frame-3404.png')" }}>
        <div className="absolute inset-0 overflow-hidden bg-[#010e1d]/90">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-2xl bg-white p-8 md:p-12"
            style={{ boxShadow: "0px 6px 10px 0 rgba(0,0,0,0.14)" }}
          >
            <div className="flex flex-col justify-start items-center gap-8">
              <div className="flex flex-col justify-start items-center gap-6">
                <div className="flex flex-col justify-start items-center gap-8">
                  <div className="flex flex-col justify-start items-center relative gap-4">
                    <div className="flex justify-start items-center relative gap-6">
                      <img className="w-14 h-14" src={Scoutflairlogo} alt="logo" />
                    </div>
                    <p className="w-full text-lg text-center text-black/80">
                      Enter your registered email address to receive a password reset link.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start w-full relative gap-6">
                    <div className="w-full">
                    <input
                      type="text"
                      placeholder="Email address or Username"
                      className="w-full h-12 p-4 rounded-lg border border-black/80 text-black"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.Email && (
                      <p className="text-red-500 text-sm">{errors.Email}</p>
                    )}
                    </div>
                    <div className="flex flex-col justify-center items-center w-full gap-6">
                      <button
                        type="submit"
                        className="w-full h-12 flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[20px] bg-[#f2a725] text-2xl font-medium text-black"
                      >
                        Continue
                      </button>
                      <p className="w-full text-base font-semibold text-center text-[#f00] cursor-pointer">
                        Cancel
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;
