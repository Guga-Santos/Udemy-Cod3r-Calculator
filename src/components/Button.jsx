import './Button.css';

export default function Button(props) {
  return (
    <button
    type='button'
    className='button'
    style={props.style}
    onClick={() => props.click(props.label)}
    >
      {props.label}
    </button>
  )
}