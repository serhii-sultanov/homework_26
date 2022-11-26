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
  color: ${(props) => (props.color === "warning" ? "#1513A0" : "#fafafa")};
  background: ${(props) => getBackgroundColor(props.color)};
`;

const getBackgroundColor = (color) => {
  switch (color) {
    case "warning":
      return "#FFD12F;";
    case "error":
      return "#EB5757;";
    default:
      return "#605DEC";
  }
};

const StyledCloseButton = styled.button`
  position: absolute;
  right: 35px;
  cursor: pointer;
  background: none;
  border: none;
`;

const Alert = ({ color, onClose, children }) => {
  return (
    <StyledAlertBase color={color}>
      {children}
      <StyledCloseButton onClick={onClose}>
        <CloseIcon />
      </StyledCloseButton>
    </StyledAlertBase>
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
