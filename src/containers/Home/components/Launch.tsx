import {Button, styled as smc, Typography} from "@mui/material";
import React from "react"
import DiffExLogo from "../../../assets/diffex-logo-transparent.png";
import { Btn, Section } from "../../../utils/theme";

export default function Launch() {
    return (
        <Section>
            <img alt={"DiffEx Logo"} width={400} height={400} src={DiffExLogo}/>
            <Typography style={{opacity: "0.8"}}>
                Decentralized Options Exchange for Ethereum Tokens.
            </Typography>
        </Section>
    )
}
