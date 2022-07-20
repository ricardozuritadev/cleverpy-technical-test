import i18next from 'i18next';
import { LangSelectorTypes } from './types/LangSelectorTypes';

const LangSelector = () => {
  const languages: LangSelectorTypes[] = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'es',
      name: 'Spanish',
      country_code: 'es',
    },
  ];

  return (
    <section className="language">
      <section className="language__options">
        {languages.map(({ code, name, country_code }: LangSelectorTypes) => {
          return (
            <button
              onClick={() => i18next.changeLanguage(code)}
              key={country_code}
              className="language__flag"
            >
              <div className={`fib fi-${country_code}`}></div>
            </button>
          );
        })}
      </section>
    </section>
  );
};

export default LangSelector;
