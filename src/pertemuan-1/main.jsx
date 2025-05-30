import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './custom.css';
import ArtikelDetail from "./ArtikelDetail";
import FormQnA from "./FormQnA";



createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <HelloWorld/>
            </Container>
            <Container>
                <ArtikelDetail/>
            </Container>
            <Container>
                <FormQnA/>
            </Container>
        </div>
    )