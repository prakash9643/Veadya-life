import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';

const ForgotPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: (values) => {
      console.log('Reset password for:', values);
      alert('Reset link sent to your email (Mock)');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="space-y-4">
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
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-4 rounded-xl font-semibold tracking-widest uppercase text-xs hover:bg-primary-dk shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
      >
        Send Reset Link <ArrowRight size={16} />
      </button>

      <div className="text-center mt-8">
        <Link to="/login" className="text-sm text-gray-500 hover:text-primary transition-colors inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Login
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
