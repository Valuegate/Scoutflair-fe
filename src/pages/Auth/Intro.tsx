import React from "react";
import CoachIntro from "./Coach/CoachIntro";
import PlayerIntro from "./Player/PlayerIntro";
import ScoutIntro from "./Scout/ScoutIntro";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Urls } from "../../constants/constants";

const Intro: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    
    if (!type || !["coach", "player", "scout"].includes(type)) {
        navigate(Urls.SIGNUP)
    } else {
        switch (type) {
            case ("coach"): return <CoachIntro />
            case ("player"): return <PlayerIntro />
            case ("scout"): return <ScoutIntro />
        }
    }
}

export default Intro