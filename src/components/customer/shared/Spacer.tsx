type Props = {
  width?: number;
  height?: number;
};

function Spacer(props: Props) {
  let width = props.width === undefined ? 0 : props.width;
  let height = props.height === undefined ? 0 : props.height;

  return <div style={{ width: `${width}rem`, height: `${height}rem` }}></div>;
}

export default Spacer;
