import { styled } from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext, useState } from 'react';
// import AuthContext from '../store/AuthContext';

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  font-size: 16px;
`;

const ErrorMsg = styled.p`
  background-color: tomato;
  color: white;
  border-radius: 5px;
  padding: 0.2em 0.8em;
  font-size: 14px;
  margin-top: -5px;

  &:empty {
    display: none;
  }
`;

export default function RegisterPage() {
  const [loginStatus, setLoginStatus] = useState('');
  const formik = useFormik({
    initialValues: {
      email: 'george.bluth@reqres.in',
      age: '',
      password: '',
      password2: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('enter valid email address')
        .required('all fields are required'),
      age: Yup.number()
        .min(18, 'This website is 18+')
        .max(300, 'Sorry, too old')
        .required('all fields are required'),
      password: Yup.string()
        .required('all fields are required')
        .min(8, 'Password must contain at least 8 symbols'),
      password2: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Password must match'
      ),
    }),
    onSubmit: (value) => {
      //   console.log('value ===', value);
      //   if (value.password === value.password2) {
      handleRegister(value);
      //   }
    },
  });

  function handleRegister(userCredentialsObj) {
    axios
      .post('https://reqres.in/api/register', userCredentialsObj)
      .then((ats) => {
        console.log('Sveiki sugryze :', userCredentialsObj.email);
        setLoginStatus('success');
        // console.log('loginStatus ===', loginStatus);
      })
      .catch((error) => {
        // prisiloginti nepavyko
        console.log(error.response.data.error);
        // formik.errors.email = error.response.data.error;
        // formik.setErrors({ email: error.response.data.error });
        setLoginStatus('failed');
        // console.log('loginStatus ===', loginStatus);
        formik.setErrors({ email: 'Email or password not found' });
      });
  }

  //   const ctx = useContext(AuthContext);
  return (
    <Wrap>
      {loginStatus === 'success' && <h2>Sveikiname, Jums pavyko</h2>}
      {loginStatus === 'failed' && <h2>Bandykite dar karta</h2>}
      {loginStatus !== 'success' && (
        <Form onSubmit={formik.handleSubmit}>
          <Input
            type='text'
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
            id='email'
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <ErrorMsg>{formik.errors.email}</ErrorMsg>
          )}
          <Input
            type='number'
            placeholder='Age'
            onChange={formik.handleChange}
            value={formik.values.age}
            id='age'
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age && (
            <ErrorMsg>{formik.errors.age}</ErrorMsg>
          )}
          <Input
            type='password'
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
            id='password'
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorMsg>{formik.errors.password}</ErrorMsg>
          )}
          <Input
            type='password'
            placeholder='Repeat Password'
            onChange={formik.handleChange}
            value={formik.values.password2}
            id='password2'
            onBlur={formik.handleBlur}
          />
          {formik.errors.password2 && formik.touched.password2 && (
            <ErrorMsg>{formik.errors.password2}</ErrorMsg>
          )}
          <button type='submit'>Register</button>
        </Form>
      )}
    </Wrap>
  );
}
