// @flow
import { connect } from "react-redux";
import Input from "./Input";

const mapStateToProps = (_, state) => {
	return { readOnly: true };
};

export default connect(mapStateToProps)(Input);
