import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ fn = () => {}, ...props }) => {
  return (
    <section>
      <input {...fn()} {...props} />
    </section>
  );
};

export default Input;
