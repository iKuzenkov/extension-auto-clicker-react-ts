import './Field.scss';

type Placeholder = {
  placeholder: string;
};

function Field(props: Placeholder) {
  const { placeholder } = props;
  return (
    <>
      <input type="text" className="acext-input-ss" placeholder={placeholder} />
    </>
  );
}

export default Field;
