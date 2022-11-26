import styled from "styled-components";
import PropTypes from "prop-types";

import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

const StyledAlertBase = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #fafafa;
`;

const StyledAlertPrimary = styled(StyledAlertBase)`
  background: #605dec;
`;

const StyledAlertError = styled(StyledAlertBase)`
  background: #eb5757;
`;

const StyledAlertWarning = styled(StyledAlertBase)`
  background: #ffd12f;
  color: #1513a0;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 35px;
  cursor: pointer;s
`;

const Alert = ({ color, onClose, children }) => {
  if (color === "warning") {
    return (
      <StyledAlertWarning>
        {children}
        <StyledCloseIcon onClick={onClose} />
      </StyledAlertWarning>
    );
  } else if (color === "error") {
    return (
      <StyledAlertError>
        {children}
        <StyledCloseIcon onClick={onClose} />
      </StyledAlertError>
    );
  }

  return (
    <StyledAlertPrimary>
      {children}
      <StyledCloseIcon onClick={onClose} />
    </StyledAlertPrimary>
  );
};

Alert.propTypes = {
  onClose: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["primary", "warning", "error"]),
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  color: "primary",
};

export default Alert;
