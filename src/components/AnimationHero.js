import FeatureCard from "./FeatureCard";
import UserCard from "./UserCard";
import { CgBowl} from "react-icons/cg";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";
import { RiNftLine } from "react-icons/ri";
import { PiLockers } from "react-icons/pi";

function AnimationHero() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <div className="FeatureCards" style={{ 
                display: "flex",
                flexDirection: "row",
            }}>
                <FeatureCard colorF="#ea80e6" colorB="#9b3397" heading="Mixer" icon={<CgBowl style={{height: "40px", width: "40px"}}/>} />
                <FeatureCard colorF="#d7ef41" colorB="#58621b" heading="Swap" icon={<MdOutlineSwapVerticalCircle style={{height: "40px", width: "40px"}}/>} />
                <FeatureCard colorF="#ea80e6" colorB="#9b3397" heading="NFT Mint" icon={<RiNftLine style={{height: "40px", width: "40px"}}/>} />
                <FeatureCard colorF="#fc7739" colorB="#653a25" heading="Locker" icon={<PiLockers style={{height: "40px", width: "40px"}}/>} />
            </div>

            <img src="https://app.r3vl.xyz/_next/static/media/logo_square_background.d620b4cf.png" alt="logo" style={{height: "120px", width: "120px", borderRadius: "20px"}}></img>
            <div className="UserCards" style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <UserCard addens="Alyssa.eth" />
                <UserCard addens="0xdg...2dca" />
                <UserCard addens="Benny.eth" />
            </div>
        </div>
    );
}

export default AnimationHero;