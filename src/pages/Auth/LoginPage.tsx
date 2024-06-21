import React from 'react';
import Scoutflairlogo from '../../assets/Scoutflairlogo.svg'; // Adjust the import path to your logo
import { Link } from 'react-router-dom';
import { Urls } from '../../constants/constants';
import { useAxios } from '../../api/base';
import { Form, Formik, Field, FormikHelpers } from 'formik';
import { LoginValidationSchema } from '../../schemas/Schema';

const LoginPage: React.FC = () => {
  const { requestApi } = useAxios()

  interface FormValues {
    username: string;
    password: string;
  }

  const initialValues: FormValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    console.log("Form data", values);
    // Perform form submission logic here
    requestApi("/signin", "POST", values)
    console.log("form submission successful")
    resetForm();
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/frame-3404.png')" }}>
        <div className="absolute inset-0 overflow-hidden bg-[#010e1d]/90">
          <p className="absolute left-1/2 transform -translate-x-1/2 top-24 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">
            Choose Your Role
          </p>
          <div className="flex flex-col justify-start items-start absolute left-1/2 transform -translate-x-1/2 top-1/3 md:top-1/2 -translate-y-1/3 md:-translate-y-1/2 gap-8 px-8 md:px-16 py-12 rounded-2xl bg-white w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div className="flex flex-col justify-start items-start w-full gap-8">
              <div className="flex flex-col justify-start items-center w-full gap-8">
                <div className="flex flex-col justify-start items-center w-full relative gap-4">
                  <div className="flex justify-center w-full relative gap-6">
                    <img className="w-14 h-14" src={Scoutflairlogo} alt="logo" />
                  </div>
                  <p className="text-lg text-left text-black/80">
                    A Sports Analytics Application
                  </p>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={LoginValidationSchema}
                  onSubmit={onSubmit}
                >
                  {({ errors, touched }) => (
                    <Form className="flex flex-col justify-start items-start w-full gap-6">
                      <div className="w-full">
                        <Field
                          type="text"
                          placeholder="Email address or Username"
                          name="username"
                          className="w-full h-12 p-4 rounded-lg border border-black/80 text-black"
                          // value={username}
                          // onChange={(e: any) => setUsername(e.target.value)}
                          required
                        />
                        {errors.username && touched.username ? (
                          <div>{errors.username}</div>
                        ) : null}
                      </div>
                      <div className="w-full">
                        <Field
                          type="password"
                          placeholder="Password"
                          name="password"
                          className="w-full h-12 p-4 rounded-lg border border-black/80 text-black"
                          // value={password}
                          // onChange={(e: any) => setPassword(e.target.value)}
                          required
                        />
                        {errors.password && touched.password ? (
                          <div>{errors.password}</div>
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
                          className="w-full h-12 flex justify-center items-center gap-2.5 px-6 py-2.5 rounded-[20px] bg-[#f2a725] text-2xl font-semibold text-black shadow-lg"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
