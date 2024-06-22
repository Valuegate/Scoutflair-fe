import React, { useState } from "react";
import Scoutflairlogo from "../../../assets/Scoutflairlogo.svg"
import { Field, Form, Formik } from "formik";
import { SignUpValidationSchema } from "../../../schemas/Schema";
import { useAxios } from "../../../api/base";
import { useSearchParams } from "react-router-dom";

const PlayerSignUp: React.FC = () => {
    const { requestApi } = useAxios();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        position: "",
        dob: "",
        licenceNumber: "",
        experience: "",
        currentTeam: "",
        email: "",
        password: "",
        confirmPassword: "",
        preferredFoot: "",
        usertype: {type}
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // Assuming position, preferredFoot, and usertype are not part of the form
        const body = {
            ...formData,
            position: 'somePosition', // Add appropriate values or get from form if needed            
        };

        const response = await requestApi('/signup', 'POST', body);

        if (response.status) {
            alert('User created successfully!');
        } else {
            alert(`Error: ${response.data.message}`);
        }
    };

    return (
        <div className="w-full min-h-screen bg-[#041931] flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center md:h-screen bg-[#041931] p-4 md:p-0">
                <div className="text-white text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                        Unlock Your Football Potentials With Scoutflair
                    </h1>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <img className="w-8 h-8" src={Scoutflairlogo} alt="" />
                        <span className="text-xl font-bold">Scout</span>
                        <span className="text-xl">Flair</span>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex justify-center items-center bg-[#f8f8ff] p-4 md:p-8">
                <div className="w-full max-w-md md:max-w-lg bg-white rounded-lg p-6 shadow-md">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold">Create Account</h2>
                        <p className="text-sm text-gray-600">Please enter your details</p>
                    </div>
                    <Formik
                        initialValues={formData}
                        validationSchema={SignUpValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-4">                                
                                    <Field
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.firstName && touched.firstName ? (
                                            <div>{errors.firstName}</div>
                                        ) : null}
                                    <Field
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.lastName && touched.lastName ? (
                                            <div>{errors.lastName}</div>
                                        ) : null}
                                </div>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Field
                                        type="text"
                                        placeholder="Position"
                                        name="position"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.position && touched.position ? (
                                            <div>{errors.position}</div>
                                        ) : null}
                                    <Field
                                        type="date"
                                        placeholder="Date of Birth"
                                        name="dob"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.dob && touched.dob ? (
                                            <div>{errors.dob}</div>
                                        ) : null}
                                </div>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Field
                                        type="text"
                                        placeholder="Current Team"
                                        name="currentTeam"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.currentTeam && touched.currentTeam ? (
                                            <div>{errors.currentTeam}</div>
                                        ) : null}
                                    <Field
                                        type="text"
                                        placeholder="Preferred Foot"
                                        name="preferredFoot"
                                        onChange={handleChange}
                                        className="flex-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    {errors.preferredFoot && touched.preferredFoot ? (
                                            <div>{errors.preferredFoot}</div>
                                        ) : null}
                                </div>
                                <Field
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null}
                                <Field
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                <Field
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="cofirmPassword"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                            <div>{errors.confirmPassword}</div>
                                        ) : null}
                                <div className="flex items-center space-x-2">
                                    <Field type="checkbox" className="form-checkbox" />
                                    <label className="text-gray-700 text-sm">
                                        By creating an account, you are agreeing to our <span className="font-bold italic">Terms of Service</span> and <span className="font-bold italic">Privacy Policy</span>
                                    </label>
                                </div>
                                <button type="submit" className="w-full py-2 bg-[#f2a725] text-black font-bold rounded-md hover:bg-yellow-500 transition">Sign Up</button>
                            </Form>
                        )}
                    </Formik>
                    <div className="text-center my-4">
                        <p className="text-gray-600 font-bold">Or</p>
                    </div>
                    <div className="space-y-2">
                        <button className="w-full py-2 border border-black rounded-md flex items-center justify-center space-x-2">
                            <span>Sign up with Google</span>
                        </button>
                        <button className="w-full py-2 border border-black rounded-md flex items-center justify-center space-x-2">
                            <span>Sign up with Apple</span>
                        </button>
                        <button className="w-full py-2 border border-black rounded-md flex items-center justify-center space-x-2">
                            <span>Sign up with Facebook</span>
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-gray-700">Already have an account? <span className="font-bold text-[#010e1d]">Sign In</span></p>
                    </div>
                </div>
            </div>
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[2353.99px] h-[2353.99px] absolute left-[3461px] top-[-2355px] object-cover"
            />
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[71.39px] h-[71.39px] absolute left-[81px] top-[413.42px] object-cover"
            />
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[52.27px] h-[52.27px] absolute left-[162px] top-[382.01px] object-cover"
            />
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[39.19px] h-[39.19px] absolute left-56 top-[350.25px] object-cover"
            />
            <img
                src="close-up-view-of-christmas-balls-concept.png"
                className="w-[27px] h-[27px] absolute left-[276px] top-[324.88px] object-cover"
            />
        </div>
    );
}

export default PlayerSignUp;
