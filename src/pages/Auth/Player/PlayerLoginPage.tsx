import React from 'react';
import Scoutflairlogo from "../../../assets/Scoutflairlogo.svg"
import { Link } from 'react-router-dom';
import { Urls } from '../../../constants/constants';
import { useAxios } from '../../../api/base';
import { Form, Formik, Field, FormikHelpers } from 'formik';
import { LoginValidationSchema } from '../../../schemas/Schema';

const PlayerLoginPage: React.FC = () => {
  const { requestApi } = useAxios()

  interface FormValues {
    username: string;
    password: string;
  }

  const initialValues: FormValues = {
    password: "",
    username: "",
  };

  const onSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    console.log("Submission Block", values);
    
    try {
      const response = await requestApi('/scoutflair/v1/signin', 'POST', values);
      console.log(response.data);

      if (response.status) {
        alert('Logged In successfully!');
        resetForm()
      } else {
        alert(`Error: ${response.data.response.data}`);
      }
    } catch (error: any) {
      console.error("Submission error:", error.response.data);
      alert("An error occurred during submission. Please try again.");
    };
  }
  return (
      <div className="w-full h-screen flex items-center justify-center bg-[url('scout-sign-in-(wrong-password).png')] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col absolute right-0 items-center justify-center w-2/3 h-screen bg-[#f4f4f6] rounded-xl">
          <div className="flex flex-row gap-40 pt-4">
            <span className="flex flex-row gap-3">
              <img className="w-4 h-4" src={Scoutflairlogo} alt="" />
              <p className=''>Scoutflair</p>
            </span>
            <p className="w-56 opacity-80 text-base text-left">
              <span className="w-56 opacity-80 text-base font-light text-left text-black">
                Don’t have an account?
              </span>
              <span className="w-56 opacity-80 text-base font-semibold text-left text-black"> </span>
              <Link to={Urls.SIGNUP} ><span className="w-56 opacity-80 text-base font-bold text-left text-[#010e1d]">Sign Up</span></Link>
            </p>
          </div>
          <div className="w-1/2 max-w-md p-6 bg-white rounded-tl-2xl rounded-bl-2xl shadow-lg my-10 mx-32">
            <div className="mt-6 mb-6">
              <p className="text-2xl font-bold text-left text-black">Sign in to your account</p>
              <p className="text-xs font-bold text-left text-black/[0.72] opacity-88">Please enter your details</p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={LoginValidationSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col justify-start items-start w-full gap-4">
                  <div className="w-full">
                    <Field
                      type="text"
                      placeholder="Email address or Username"
                      name="username"
                      className="w-full h-10 p-4 rounded-lg border border-black/80 text-black"
                      // value={username}
                      // onChange={(e: any) => setUsername(e.target.value)}
                      required
                    />
                    {errors.username && touched.username ? (
                      <div><p style={{ color: "red" }}>{errors.username}</p></div>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <Field
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="w-full h-10 p-4 rounded-lg border border-black/80 text-black"
                      // value={password}
                      // onChange={(e: any) => setPassword(e.target.value)}
                      required
                    />
                    {errors.password && touched.password ? (
                      <div><p style={{ color: "red" }}>{errors.password}</p></div>
                    ) : null}
                  </div>
                  <div className="flex justify-between items-center w-full gap-4">
                    <div className="flex items-center gap-2">
                      <Field type="checkbox" className="w-4 h-4 border border-black" />
                      <label className="text-black opacity-72">Remember me</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link to={Urls.PASSWORDRESET}>
                        <p className='text-bold opacity-72'>Forgot Password</p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full gap-4">
                    <button
                      type="submit"
                      className="w-full h-10 flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-lg bg-[#f2a725] text-2xl font-semibold text-black shadow-lg"
                    >
                      Sign In
                    </button>
                    <p className="opacity-80 text-base text-left">
                      <span className="text-black">Don’t have an account?</span>
                      <Link to={Urls.HOME} className="font-bold text-[#010e1d]"> Sign Up</Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="flex flex-col gap-4 mt-6">
              <Link to={""}>
                <button type="button" className="w-full h-10 flex items-center justify-center border border-black/[0.56] rounded-xl space-x-4">
                  <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <!-- SVG path for Google Icon --> */}
                  </svg>
                  <span className="text-xl font-medium text-black">Sign in with Google</span>
                </button>
              </Link>
              <Link to={""}>
                <button type="button" className="w-full h-10 flex items-center justify-center border border-black/[0.56] rounded-xl space-x-4">
                  <svg className="w-6 h-6" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <!-- SVG path for Apple Icon --> */}
                  </svg>
                  <span className="text-xl font-medium text-black">Sign in with Apple</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default PlayerLoginPage;
