import style from './Heading.module.css'
let Heading = ({heading}) => {
  return (
    <>
    <h1 className={`text-center ${style.heading}`}>{heading}</h1>
    </>
  )
}

export default Heading;