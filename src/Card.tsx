import {type FC, memo} from "react";
import {Box, Link, Stack, Typography} from "@mui/material";

export interface CardProps {
    url: string;
    title: string;
    description: string;
    imgSrc: string;
}

const Card: FC<CardProps> = ({url, title, description, imgSrc}) => {
    return (
        <Stack direction="row" spacing={2} width="900px">
            <Box width="450px">
                <Link variant="h6" href={url}>{title}</Link>
                <Typography>{description}</Typography>
            </Box>
            <Box width="450px">
                <img src={imgSrc} style={{maxHeight: '200px', maxWidth: '280px'}} alt={title}/>
            </Box>
        </Stack>
    )
}

export default memo(Card)