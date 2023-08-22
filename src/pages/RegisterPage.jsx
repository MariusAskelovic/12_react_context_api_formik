import { styled } from 'styled-components';
import Wrap from '../styled/Wrap.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = styled.form`
  & input {
    margin-bottom: 10px;
  }
`;

export default function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
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
      console.log(value);
    },
  });

  return (
    <Wrap>
      <Form>
        <input
          type='text'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
          id='email'
          onBlur={formik.handleBlur}
        />
        {formik.touched.email &&
          (formik.errors.email ? <p>{formik.errors.email}</p> : null)}
        <input
          type='number'
          placeholder='Age'
          onChange={formik.handleChange}
          value={formik.values.age}
          id='age'
          onBlur={formik.handleBlur}
        />
        {formik.touched.age &&
          (formik.errors.age ? <p>{formik.errors.age}</p> : null)}
        <input
          type='password'
          placeholder='Password'
          onChange={formik.handleChange}
          value={formik.values.password}
          id='password'
          onBlur={formik.handleBlur}
        />
        {formik.touched.password &&
          (formik.errors.password ? <p>{formik.errors.password}</p> : null)}
        <input
          type='password'
          placeholder='Repeat Password'
          onChange={formik.handleChange}
          value={formik.values.password2}
          id='password2'
          onBlur={formik.handleBlur}
        />
        {formik.touched.password2 &&
          (formik.errors.password2 ? <p>{formik.errors.password2}</p> : null)}
      </Form>
    </Wrap>
  );
}
