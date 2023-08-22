import { styled } from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
`;
const FormContainer = styled.form`
  max-width: 400px;
`;
const Input = styled.input`
  font-size: 16px;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$isError ? 'red' : '#777')};
  display: block;
  margin-bottom: 10px;
  width: 100%;
  background-color: ${(props) => (props.$isError ? '#da9b90' : 'transparent')};
`;
const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  background-color: #333;
  color: white;
`;

const ErrorMsg = styled.p`
  background-color: tomato;
  color: white;
  border-radius: 5px;
  padding: 0.2em 0.8em;
  font-size: 14px;
  margin-top: -5px;
  width: 300px;

  /* &:empty {
    display: none;
  } */
`;

export default function LoginPage() {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: 'emma.wong@reqres.in',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^([a-ząčęėįšųūžA-ZĄČĘĖĮŠŲŪŽ0-9._%-]+@[a-ząčęėįšųūžA-ZĄČĘĖĮŠŲŪŽ0-9.-]+\.[a-zA-Z]{2,})$/,
          'patikrinkite email adresa'
        )
        .required('required')
        .min(3, 'minimum 3 simboliai')
        .trim(),
      password: Yup.string()
        .min(4, 'minimum 4 simboliai')
        .max(8, 'maximum 8 simboliai')
        .required('privalomas laukas')
        .trim(),
    }),
    onSubmit: (values) => {
      //   console.log('forma pateikta, duomenys:', values);
      handleLogin(values);
    },
  });

  function handleLogin(userCredentialsObj) {
    console.log('userCredentialsObj ===', userCredentialsObj);
    axios
      .post('https://reqres.in/api/login', userCredentialsObj)
      .then((ats) => {
        console.log(ats);
        console.log(ats.data.token);
        if (ats.data.token) {
          setLoginSuccess(true);
        }
      })
      .catch((error) => {
        console.warn();
        console.log('error.response.data.error ===', error.response.data.error);
        // formik.errors.email = error.response.data.error;
        // formik.setErrors({ email: error.response.data.error });
        formik.setErrors({ email: 'Email or password not found' });
      });
  }

  //   console.log('formik.values ===', formik.values);

  return (
    <Wrap>
      <Title>LoginPage</Title>
      {loginSuccess && (
        <div>
          <h2>Sekmingai prisijungete kaip {formik.values.email}</h2>
        </div>
      )}
      {!loginSuccess && (
        <FormContainer onSubmit={formik.handleSubmit}>
          <Input
            $isError={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
            type='text'
            placeholder='Email'
            id='email'
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email ? (
            <ErrorMsg>{formik.errors.email}</ErrorMsg>
          ) : null}
          <Input
            $isError={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
            value={formik.values.password}
            type='password'
            placeholder='Password'
            id='password'
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorMsg>{formik.errors.password}</ErrorMsg>
          )}
          <SubmitBtn>Login</SubmitBtn>
        </FormContainer>
      )}
    </Wrap>
  );
}
