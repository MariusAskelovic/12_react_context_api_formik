import { styled } from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
      password2: Yup.string()
        .required('all fields are required')
        .min(8, 'Password must contain at least 8 symbols'),
    }),
    onSubmit: (value) => {
      console.log('value ===', value);
      if (value.password === value.password2) {
        handleRegister(value);
      }
    },
  });

  function handleRegister(userCredentialsObj) {
    axios
      .post('https://reqres.in/api/register', userCredentialsObj)
      .then((ats) => console.log('ats ===', ats))
      .catch((error) => {
        // prisiloginti nepavyko
        console.warn('ivyko klaida:', error);
        console.log('error.response.data.error ===', error.response.data.error);
        // formik.errors.email = error.response.data.error;
        // formik.setErrors({ email: error.response.data.error });
        formik.setErrors({ email: 'Email or password not found' });
      });
  }

  return (
    <Wrap>
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
    </Wrap>
  );
}
