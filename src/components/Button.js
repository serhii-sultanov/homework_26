import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButtonBase = styled.button`
  border-radius: 4px;
  border: 1px solid transparent;
  margin: 20px;
  cursor: pointer;
  font-size: ${(props) => (props.size === "large" ? "18px" : "16px")};
  line-height: ${(props) => (props.size === "large" ? "25px" : "22px")};
  padding: ${(props) => (props.size === "small" ? "8px 16px" : "12px 20px")};
`;

const StyledPrimaryButton = styled(StyledButtonBase)`
  background: #605dec;
  color: #fafafa;

  :hover {
    background: #1513a0;
  }

  :disabled {
    background: rgba(203, 212, 230, 0.3);
    border-color: #7c8db0;
    color: #7c8db0;
    cursor: not-allowed;
  }
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
  background: none;
  border-color: #605dec;
  color: #605dec;

  :hover {
    background: #e9e8fc;
  }

  :disabled {
    border-color: #7c8db0;
    color: #7c8db0;
    background: #fff;
    cursor: not-allowed;
  }
`;

const Button = ({ color, size, disabled, children, onClick }) => {
  const buttonProps = {
    disabled,
    onClick,
    children,
    size,
  };

  if (color === "secondary") {
    return <StyledSecondaryButton {...buttonProps} />;
  }

  return <StyledPrimaryButton {...buttonProps} />;
};

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};

Button.defaultProps = {
  color: "primary",
  disabled: false,
};

export default Button;
