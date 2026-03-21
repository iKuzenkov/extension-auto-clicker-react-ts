import Field from '../ReusableComponents/Field/Field.tsx';
import './Inputs.scss';

function Inputs() {
  return (
    <>
      <div id="acext-inputs-container-ss">
        <div className="acext-timer-inputs-ss">
          <Field placeholder="h" />
          <Field placeholder="m" />
          <Field placeholder="s" />
        </div>
      </div>
    </>
  );
}

export default Inputs;
