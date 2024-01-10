import Form from "./Form";
const Main = () => {
    return (
        <>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse explicabo officia, culpa odio tempora expedita, consequatur quidem ullam saepe non ea laboriosam quaerat iste eos? Voluptatum inventore dolor consectetur?</p>
            <div className="support">
                <div className="left">
                    <div className="btns">
                        <button type="button" className="btn btn-dark">Via Support Call</button>
                        <button type="button" className="btn btn-dark">Via Call</button>
                    </div>
                    <Form></Form>
                </div>
                <div className="right">
                    <img src="../public/images/contact.svg" alt="img" />
                </div>
            </div>
        </>

    )
}

export default Main;