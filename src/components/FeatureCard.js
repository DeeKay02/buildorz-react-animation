import { AiOutlineArrowRight } from "react-icons/ai";

export default function FeatureCard(props) {
    return (
        <div className="feature-card" style={{margin: "30px"}}>
            <div className="back-shade" style={{ 
                backgroundColor: props.colorB, 
                height: "210px", 
                width: "210px",
                borderRadius: "20px",
                position: "absolute",
                marginTop: "37px",
                marginLeft: "37px",
            }} />
            <div className="front" style={{ 
                backgroundColor: props.colorF, 
                height: "200px", 
                width: "200px",
                borderRadius: "20px",
                position: "relative",
                padding: "15px"
            }}>
                {props.icon}
                <h3 style={{padding: "0px", margin: "0px"}}>{props.heading}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
                <p style={{
                    textAlign: "right",
                    alignItems: "baseline",
                }}>
                    Read more <AiOutlineArrowRight />
                </p>
            </div>
        </div>
    );
}