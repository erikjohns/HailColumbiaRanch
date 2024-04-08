import Navbar from "../../Components/Navbar";
import "../Styling/Contact.css";
import {useState} from "react";
import StateSelector from "../../Components/StateSelector";
import Footer from "../../Components/Footer";

const Contact = () => {

    const [phoneNumber, setPhoneNumber] = useState('');

    const formatPhoneNumber = (input) => {
        // Implement your phone number formatting logic here
        // This is a simple example that adds dashes after every 3 digits
        return input.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    };

    const handleChange = (event) => {
        const inputPhoneNumber = event.target.value;
        const formattedNumber = formatPhoneNumber(inputPhoneNumber);
        setPhoneNumber(formattedNumber);
    };

    return (
        <div className="contact-page">
            <Navbar />
            <div className="contact-page-container">

                <div className={"contact-page-heading"}>
                    <h1>Contact Us</h1>
                    <h4>Want to Get in Touch?</h4>
                    <p>
                        Whether a weekend wedding or a week-long getaway, tell us more about your event and we’ll get
                        back to
                        you ASAP! Please, feel free to be as detailed as possible; the more info, the better. <br/>
                        <br/>
                        If simply trying to get a hold of us, please send an email to BLAH BLAH BLAH.
                    </p>
                </div>

                <form>
                    <div className={"contact-form-two"}>
                        <div className={"field-holder"}>
                            <input id={"firstname"} type="text" required/>
                            <label htmlFor={"firstname"}>First Name</label>
                        </div>

                        <div className={"field-holder"}>
                            <input id={"lastname"} type="text" required/>
                            <label htmlFor={"lastname"}>Last Name</label>
                        </div>
                    </div>

                    <div className={"field-holder"}>
                        <input id={"email"} type="email" required/>
                        <label htmlFor={"email"}>Email</label>
                    </div>

                    <div className={"field-holder"}>
                        <input id={"phonenumber"} type="text" value={phoneNumber} onChange={handleChange} required/>
                        <label htmlFor={"phonenumber"}>Phone Number</label>
                    </div>

                    <StateSelector/>

                    <div className={"contact-form-two"}>
                        <div className={"field-holder"}>
                            <input className="" type="date" required/>
                            <label>Preferred Date</label>
                        </div>

                        <div className={"field-holder"}>
                            <input className="" type="date" required/>
                            <label>Secondary Date</label>
                        </div>
                    </div>

                    <div className={"select-holder"}>
                        <select id={"accommodations"} required>
                            <option value=""></option>
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>
                        </select>
                        <label htmlFor={"accommodations"}>Are You Interested in The Lodge?</label>
                    </div>

                    <div className={"contact-form-two"}>
                        <div className={"field-holder"}>
                            <input id={"budget"} type={"number"} required/>
                            <label htmlFor={"budget"}>Event Budget</label>
                        </div>

                        <div className={"field-holder"}>
                            <input id={"guests"} type="number" required/>
                            <label htmlFor={"guests"}>Number of Guests</label>
                        </div>
                    </div>

                    <div className={"field-holder"}>
                        <input id={"referral"} type={"text"} required/>
                        <label htmlFor={"referral"}>How Did You Hear About Us?</label>
                    </div>

                    <div className={"field-holder"}>
                        <input id={"eventdetails"} type={"text"} required/>
                        <label htmlFor={"eventdetails"}>Tell Us More About Your Event</label>
                    </div>
                    <button className="submit" type={"submit"}>Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;