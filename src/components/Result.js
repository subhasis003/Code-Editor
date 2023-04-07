import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";
import "../App.css";

const Container = styled(Box)`
    height: 45vh;
`;

const Result = () => {
    const [src, setSrc] = useState("");

    const { html, css, js } = useContext(DataContext);
    const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [html, css, js]);

    return (
        <Container style={{ color: "black" }}>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
                frameBorder={0}
            />
        </Container>
    );
};

export default Result;
