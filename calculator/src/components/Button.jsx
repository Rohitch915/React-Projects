import ButtonCreate from "./ButtonCreate";
const Button = ({arr,btnClick}) => {


    return (
        <>
            <div className="container text-center">
                <div className="row row-cols-3 buttonGrid">
                    {arr.map((item) => (

                        <ButtonCreate key={item} props={item} btnClick={btnClick}/>

                    ))}
                </div>

            </div>
        </>
    )
}

export default Button;