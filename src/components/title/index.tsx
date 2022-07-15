import { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <section>
      <p>{children}</p>
    </section>
  );
};

export default Title;
