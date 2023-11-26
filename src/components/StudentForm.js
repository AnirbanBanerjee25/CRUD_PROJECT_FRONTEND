import { useState, useEffect } from "react";

function StudentForm(props) {
    const [name, setName] = useState(props.nameValue || "");
    const [email, setEmail] = useState(props.emailValue || "");
    const [rollNo, setRollNo] = useState(props.rollNoValue || "");

    useEffect(() => {
        setName(props.nameValue || "");
        setEmail(props.emailValue || "");
        setRollNo(props.rollNoValue || "");
    }, [props.nameValue, props.emailValue, props.rollNoValue]);

    const handleClick = () => {
        const updatedData = [name, email, rollNo];
        props.getState(updatedData);
    }

    return (
        <div style={{ maxWidth: "40%", alignItems: "center", margin: "0px auto" }}>
            <br/>
            <h5>Please fill in this form.</h5>
            <input
                onChange={(event) => setName(event.target.value)}
                value={name}
                className="form-control my-3"
                placeholder="Enter your name"
            />
            <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                className="form-control my-3"
                placeholder="Enter your email"
            />
            <input
                onChange={(event) => setRollNo(event.target.value)}
                value={rollNo}
                className="form-control my-3"
                placeholder="Enter your roll number"
            />
            <button onClick={handleClick} type="submit" className="btn btn-success my-3 d-block mx-auto">
                Submit
            </button>
        </div>
    );
}

export default StudentForm;
