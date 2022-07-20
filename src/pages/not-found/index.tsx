import { useTranslation } from 'react-i18next';

import Waves from '../../components/waves';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="auth">
      <h2>404 - {t('not_found')}</h2>
      <Waves />
    </section>
  );
};

export default NotFound;
