import { ButtonAttributes } from './types';

const Button: React.FC<ButtonAttributes> = ({ text, handleClick }) => {
  return (
    <section onClick={handleClick} className="button">
      <p className="button__text">{text}</p>
    </section>
  );
};

export default Button;
