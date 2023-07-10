export default function FeatureCard({addens,}) {
    return (
        <div className="user-card" style={{margin: "30px"}}>
            <div className="bg">
                <div className="back-shade" style={{ 
                backgroundColor: "#6a438b", 
                height: "300px", 
                width: "250px",
                borderRadius: "20px",
                position: "absolute",
            }} />
            <div className="front" style={{ 
                background: "linear-gradient(0deg, rgba(231,62,127,1) 0%, rgba(176,124,234,1) 100%)",
                height: "250px", 
                width: "200px",
                borderRadius: "20px",
                position: "relative",
                padding: "15px",
                marginLeft: "10px",
            }}>
                <h2 style={{
                    color: "white",
                    margin: "10px"
                }}>{addens}</h2>
            </div>
            </div>
        </div>
    );
}