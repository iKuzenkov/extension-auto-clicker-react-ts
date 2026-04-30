type Props = {
  newLeft: number;
  newTop: number;
};

function getPanelPosition(props: Props) {
  const { newLeft, newTop } = props;

  localStorage.setItem(
    'acext-panel-position-ss',
    JSON.stringify({
      left: newLeft,
      top: newTop,
    })
  );
}

export default getPanelPosition;
