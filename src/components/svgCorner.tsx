type Props={
  className?: string;
} 
export default function SVGCorner({className=""}:Props){
  return  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26.65 29.02"
    className={`w-6.25 absolute left-0 bottom-0 translate-y-7 -translate-x-5 -rotate-90 ${className}`}
  >
    <path
      d="M0,28.98c0,0.01,0,0.02,0,0.03h26.65V0C26.65,15.57,14.83,28.27,0,28.98z"
      className="fill-background-default"
    />
  </svg>
}

