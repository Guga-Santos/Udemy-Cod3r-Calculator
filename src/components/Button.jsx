import './Button.css';

export default function Button(props) {
  return (
    <button
    type='button'
    className='button'
    style={props.style}
    >
      {props.label}
    </button>
  )
}