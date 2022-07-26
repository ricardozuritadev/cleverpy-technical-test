import { useAppDispatch } from '../../../store/hooks';
import { setAdmin } from '../../../store/slices/admin';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import images from '../../../utils/imgLoader';

import Input from '../../../components/input';
import Button from '../../../components/button';
import Waves from '../../../components/waves';
import LangSelector from '../../../components/lang-selector';

const Login: React.FC = () => {
  const { t } = useTranslation(); // Utilidad para traducir textos
  const dispatch = useAppDispatch();
  const submitRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleClick = () => navigate('/register');
  const handleButton = () => {
    if (submitRef.current != null) submitRef.current.click();
  };
  const onSubmit = (data: FieldValues) => {
    dispatch(setAdmin(data));
    navigate('/dashboard/manage');
  };

  return (
    <section className="auth">
      <div className="auth__lang">
        <LangSelector />
      </div>

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
          <Button text={t('login')} handleClick={handleButton} />
          {/* <p className="auth__text">
            {t('no_account')}{' '}
            <span onClick={handleClick} className="auth__signup">
              {t('register')}
            </span>
          </p> */}
        </section>
      </div>

      <Waves />
    </section>
  );
};

export default Login;
