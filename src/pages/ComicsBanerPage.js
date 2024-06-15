import { Container } from "../components/style/Container"
import { ComicsBaner } from "../components/ComicsBaner/ComicsBaner"
import { Outlet } from "react-router-dom"

export const ComicsBanerPage = () => {
    return (
        <>
        <Container>
            <ComicsBaner/>
        </Container>
        <Outlet/>
        </>
    )
}