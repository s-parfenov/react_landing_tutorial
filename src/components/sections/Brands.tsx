import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = [
    "discord",
    "openai",
    "paypal",
    "slack",
    "spotify",
    "youtube",
]

export const Brands = () => {
    return (
        <section>
            {" "}
            <Container className="space-y-8">
                <div className="text-center max-w-3xl mx-auto">
                    <Title>Trusted by Industry Leaders</Title>
                </div>
                <div className="flex justify-center gap-4">
                    {logos.map((logo, key) => (
                        <div key={key} className="p-4 sm:p-5 rounded-xl bg-body no-border group">
                            <img src={`/logos/${logo}.png`} width="100" height="60" alt={logo} 
                                    className="h-7 sm:h-10 w-auto ease-liner duration-300 grayscale 
                                    group-hover:!grayscale-0 group-hover:scale-105" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};