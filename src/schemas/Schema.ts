import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name must be less than 50 characters")
    .required("Full Name is required"),
  dob: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future"),
  licenceNumber: Yup.string()
    .matches(/^[A-Z0-9]{6,10}$/, "Licence Number must be 6-10 characters and alphanumeric")
    .required("Licence Number is required"),
  experience: Yup.number()
    .min(0, "Experience must be a positive number")
    .max(50, "Experience cannot be more than 50 years")
    .required("Experience is required"),
  currentTeam: Yup.string()
    .max(50, "Current Team must be less than 50 characters")
    .required("Current Team is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required("Confirm Password is required")
});

export const LoginValidationSchema = Yup.object({
  username: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
});

export const PasswordResetValidationSchema = Yup.object({
  newpassword: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newpassword')], 'Passwords must match')
    .required("Confirm Password is required")
})

export const EmailValidationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Address").required("Required")
})