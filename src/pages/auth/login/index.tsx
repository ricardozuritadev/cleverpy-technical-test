import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import images from '../../../utils/imgLoader';

import Input from '../../../components/input';
import Button from '../../../components/button';
import Waves from '../../../components/waves';

const Login: React.FC = () => {
  const submitRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleClick = () => navigate('/register');
  const handleButton = () => {
    if (submitRef.current != null) submitRef.current.click();
  };
  const onSubmit = (data: FieldValues) => {
    console.info('> user data: ', data);
  };

  return (
    <section className="auth">
      <div className="auth__pic">
        <img className="auth__img" src={images.avatar} alt="" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
        <Input type="email" placeholder="email" fn={() => register('email')} />
        <Input
          type="password"
          placeholder="password"
          fn={() => register('password')}
        />
        <input type="submit" ref={submitRef} style={{ display: 'none' }} />
      </form>

      <section className="auth__buttons">
        <Button text="Login" handleClick={handleButton} />
        <p className="auth__text">
          Don't have an account?{' '}
          <span onClick={handleClick} className="auth__signup">
            Signup here
          </span>
        </p>
      </section>

      <Waves />
    </section>
  );
};

export default Login;
