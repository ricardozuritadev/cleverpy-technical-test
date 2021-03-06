import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import images from '../../../utils/imgLoader';

import Input from '../../../components/input';
import Button from '../../../components/button';
import Waves from '../../../components/waves';

const Register: React.FC = () => {
  const submitRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { t } = useTranslation();

  const handleClick = () => navigate('/login');
  const handleButton = () => {
    if (submitRef.current != null) submitRef.current.click();
  };
  const onSubmit = (data: FieldValues) => {
    console.info('> user data: ', data);
  };

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
            type="username"
            placeholder={t('username')}
            required
            fn={() => register('username')}
          />
          <Input
            type="password"
            placeholder={t('password')}
            required
            fn={() => register('password')}
          />
          <input type="submit" ref={submitRef} style={{ display: 'none' }} />
        </form>

        <section className="auth__buttons">
          <Button text="Signup" handleClick={handleButton} />
          <p className="auth__text">
            {t('have_account')}{' '}
            <span onClick={handleClick} className="auth__signup">
              {t('login')}
            </span>
          </p>
        </section>
      </div>

      <Waves />
    </section>
  );
};

export default Register;
