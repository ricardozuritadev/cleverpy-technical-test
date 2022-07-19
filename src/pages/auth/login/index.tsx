import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { useGetter } from '../../../context';
import images from '../../../utils/imgLoader';

import Input from '../../../components/input';
import Button from '../../../components/button';
import Waves from '../../../components/waves';

const Login: React.FC = () => {
  const { admin, setAdmin } = useGetter();
  const submitRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleClick = () => navigate('/register');
  const handleButton = () => {
    if (submitRef.current != null) submitRef.current.click();
  };
  const onSubmit = (data: FieldValues) => {
    setAdmin(data);
    navigate('/dashboard/manage');
  };

  console.log(admin);

  return (
    <section className="auth">
      <div className="auth__shadow">
        <div className="auth__pic">
          <img className="auth__img" src={images.avatar} alt="" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
          <Input
            type="email"
            placeholder="email"
            required
            fn={() => register('email')}
          />
          <Input
            type="text"
            placeholder="username"
            required
            fn={() => register('username')}
          />
          <Input
            type="password"
            placeholder="password"
            required
            fn={() => register('password')}
          />
          <input type="submit" ref={submitRef} style={{ display: 'none' }} />
        </form>

        <section className="auth__buttons">
          <Button text="Login" handleClick={handleButton} />
          {/* <p className="auth__text">
            Don't have an account?{' '}
            <span onClick={handleClick} className="auth__signup">
              Signup here
            </span>
          </p> */}
        </section>
      </div>

      <Waves />
    </section>
  );
};

export default Login;
