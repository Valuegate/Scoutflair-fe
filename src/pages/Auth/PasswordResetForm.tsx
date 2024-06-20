import React, {useState} from 'react';
import Scoutflairlogo from '../../assets/Scoutflairlogo.svg';  // Adjust the import path to your logo
import { Link } from 'react-router-dom';
import { Urls } from '../../constants/constants';

const PasswordResetForm: React.FC = () => {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ newPassword?: string; confirmPassword?: string }>({});

  const validateForm = () => {
    const newErrors: { newPassword?: string; confirmPassword?: string } = {};

    if (!newPassword) {
      newErrors.newPassword = 'New password is required';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    }

    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // proceed with form submission (e.g., API call)
      console.log('Form is valid');
    }
  };
  return (
    <div className="w-full h-screen relative overflow-hidden bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/frame-3404.png')" }}>
      <div className="w-full h-full absolute left-0 top-0 overflow-hidden bg-[#010e1d]/90">
        <p className="absolute left-1/2 transform -translate-x-1/2 top-24 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">
          Choose Your Role
        </p>
        <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 md:p-12" style={{ boxShadow: "0px 6px 10px 0 rgba(0,0,0,0.14)" }}>
          <div className="flex flex-col justify-start items-center gap-10">
            <div className="flex flex-col justify-start items-center gap-6">
              <div className="flex flex-col justify-start items-center relative gap-4">
                <div className="flex justify-start items-center relative gap-6">
                  <img className="w-14 h-14" src={Scoutflairlogo} alt="logo" />
                </div>
                <p className="w-full text-lg text-center text-black/80">
                  We have received your reset password. Please enter your new password below
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start w-full relative gap-6">
                <div className="w-full">
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full h-12 p-4 rounded-lg border border-black/80 text-black"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {errors.newPassword && (
                    <p className="text-red-500 text-sm">{errors.newPassword}</p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full h-12 p-4 rounded-lg border border-black/80 text-black"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-6">
                  <button
                    type="submit"
                    className="w-full h-12 flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[20px] bg-[#f2a725] text-2xl font-medium text-black"
                  >
                    Change Password
                  </button>
                </div>
                {Object.keys(errors).length === 0 && (
                  <Link to={Urls.PASSWORDRESETSUCCESS} className="w-full"></Link>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetForm;
