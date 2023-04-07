import "../App.css";
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
// import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import SettingsIcon from '@material-ui/icons/Settings';

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Container = styled(Box)`
    flex-grow: 1;
    flex-basix: 0;
    display: flex;
    flex-direction: column;
    padding: 0 6px 6px;
`;

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-family: "Poppins", "sans-serif";
`;

const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #aaaebc;
    justify-content: space-between;
    font-weight: 700px;
`;

const Editor = (props) => {
    const { language, displayName, value, onChange, icon } = props;

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <Container>
            <Header>
                <Heading>
                    <Box component="span">{icon}</Box>
                    {displayName}
                </Heading>

                <Box
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "6px",
                        alignSelf: "center",
                    }}
                >
                    <Box>
                        <SettingsIcon
                            style={{
                                padding: "0 7px",
                                cursor: "pointer",
                                width: "15px",
                                background: "#444857",
                                borderRadius: "4px",
                                color: "white",
                            }}
                        />
                    </Box>
                    <ArrowDropDownIcon
                        style={{
                            padding: "0 4px",
                            cursor: "pointer",
                            width: "20px",
                            background: "#444857",
                            borderRadius: "4px",
                            color: "white",
                        }}
                    />
                </Box>
            </Header>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="controlled-editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "material",
                    lineNumbers: true,
                }}
            />
        </Container>
    );
};

export default Editor;
