import React from "react"

import { OutlineBaseInput } from "./OutlineBaseInput"

const PassInput = (props) => (
    <OutlineBaseInput
        label="Senha"
        type="password"
        {...props}
    />
);
export { PassInput }