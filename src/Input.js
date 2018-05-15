// @flow
import React from "react";

type Props = { readOnly?: boolean };

const Input = ({ readOnly }: Props) => (
	<input type="text" readOnly={readOnly} />
);

export default Input;
