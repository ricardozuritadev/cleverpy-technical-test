import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <section>
      <p>{text}</p>
    </section>
  );
};

export default Button;
