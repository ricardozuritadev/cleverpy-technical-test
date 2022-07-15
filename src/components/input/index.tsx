import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ fn = () => {}, ...props }) => {
  return (
    <section className="input">
      <input {...fn()} {...props} className="input__field" />
    </section>
  );
};

export default Input;
