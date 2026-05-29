import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: (values) => {
      console.log('Register values:', values);
      alert('Registration successful (Mock)');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-5">
      <div className="space-y-4">
        <div className="relative">
          <label className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1.5 block">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              className={`w-full bg-gray-50 border ${formik.touched.fullName && formik.errors.fullName ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
              {...formik.getFieldProps('fullName')}
            />
          </div>
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500 text-xs mt-1 ml-1">{formik.errors.fullName}</div>
          ) : null}
        </div>

        <div className="relative">
          <label className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1.5 block">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              className={`w-full bg-gray-50 border ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
              {...formik.getFieldProps('email')}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mt-1 ml-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="relative">
          <label className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1.5 block">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className={`w-full bg-gray-50 border ${formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
              {...formik.getFieldProps('password')}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1 ml-1">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="relative">
          <label className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1.5 block">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              className={`w-full bg-gray-50 border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-400' : 'border-gray-200'} rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
              {...formik.getFieldProps('confirmPassword')}
            />
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-xs mt-1 ml-1">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-4 rounded-xl font-semibold tracking-widest uppercase text-xs hover:bg-primary-dk shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
      >
        Create Account <ArrowRight size={16} />
      </button>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold hover:underline">Sign In</Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
