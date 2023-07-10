import FeatureCard from "./FeatureCard";


function AnimationHero() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div className="FeatureCards">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
        </div>
    );
}

export default AnimationHero;