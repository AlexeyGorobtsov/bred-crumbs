import { connect } from "react-redux";
import { BreadCrumbs } from "../../components/bread-crumbs";
import { getAddressBarDataRequest } from "../../actions/bread-crumbs-actions";

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => {
  return {
      getAddressBarDataRequest: query => dispatch(getAddressBarDataRequest(query))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumbs);