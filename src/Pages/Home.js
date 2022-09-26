import { Countdown } from "../Components/countdown.js"
import { Main, Section } from "../Style/style"


const Home = () => {
    return (
        <>
        <Main>
            <Section>
                <h1>Avreise til Sveits:</h1>
                <Countdown/>
            </Section>
        </Main>
        </>
    )
}

export default Home;