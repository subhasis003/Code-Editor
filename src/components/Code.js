import Box from "@material-ui/core/Box";
import styled from "styled-components";
import Editor from "./Editor";
import { useContext } from "react";

import { DataContext } from "../context/DataProvider";

import SplitPane from "react-split-pane";

import "../App.css";

const Container = styled(Box)`
    display: flex;
    height: 55vh;
    background-color: #060606;
`;

const Code = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Container>
            <SplitPane
                snapOffset={90}
                allowResize="true"
                split="vertical"
                minSize={100}
                maxSize={1300}
                defaultSize="70%"
                resizerStyle={{
                    width: "5px",
                    cursor: "col-resize",
                }}
                style={{ height: "50vh" }}
            >
                <SplitPane
                    allowResize="true"
                    split="vertical"
                    minSize={100}
                    maxSize={1000}
                    defaultSize="50%"
                    resizerStyle={{
                        width: "5px",
                        cursor: "col-resize",
                    }}
                    style={{ height: "50vh" }}
                >
                    <Editor
                        language="xml"
                        displayName="HTML"
                        icon={
                            <img
                                src="https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png"
                                alt="html"
                                style={{
                                    width: "20px",
                                    display: "flex",
                                    placeContent: "center",
                                    marginRight: "5px",
                                    paddingBottom: "2px",
                                }}
                            />
                        }
                        value={html}
                        onChange={setHtml}
                    />
                    <Editor
                        language="css"
                        displayName="CSS"
                        icon={
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                                alt="css"
                                style={{
                                    width: "20px",
                                    display: "flex",
                                    placeContent: "center",
                                    marginRight: "5px",
                                    paddingBottom: "2px",
                                }}
                            />
                        }
                        value={css}
                        onChange={setCss}
                    />
                </SplitPane>

                <Editor
                    language="javascript"
                    displayName="JS"
                    icon={
                        <img
                            src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"
                            alt="js"
                            style={{
                                width: "18px",
                                display: "flex",
                                placeContent: "center",
                                marginRight: "5px",
                                paddingBottom: "2px",
                            }}
                        />
                    }
                    value={js}
                    onChange={setJs}
                />
            </SplitPane>
        </Container>
    );
};

export default Code;
