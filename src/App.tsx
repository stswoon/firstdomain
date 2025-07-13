import {Container, Stack} from "@mui/material";
import Card, {type CardProps} from "./Card.tsx";
import {memo} from "react";

import data from "./data.json" ;


function App() {
    return (
        <Container maxWidth="md">
            <Stack spacing={4} padding={2}>
                {(data as CardProps[]).map(item => (<Card key={item.url} {...item} />))}
            </Stack>
        </Container>
    )
}

export default memo(App)
