import propTypes from "prop-types";
export default function InputNumber({ from, to, className, onChange}) {
    const re = /^\d+$/;
    const OnInput = (event) =>{   
      
        if (!re.test(event.key) && event.key !== "Backspace"){
            event.preventDefault();
            return;
        }
        
        if(to){
          if (event.key !== "Backspace" && Number(event.target.value + event.key) > to){
            event.preventDefault();
            return;
          }
        }
    }
  return <input min={from} max={to} type="number" onChange={(e)=>onChange(e.target.value)}className={className} onKeyDown={OnInput}/>;
}

InputNumber.propTypes = {
  from: propTypes.string,
  to: propTypes.string,
  className: propTypes.string,
  onChange: propTypes.func
};
