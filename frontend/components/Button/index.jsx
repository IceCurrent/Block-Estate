import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  to, // Add 'to' prop for Link
  ...restProps
}) => {
  const isLink = !!to // Check if 'to' prop is provided

  // If 'to' prop is provided, render as Link, else as button
  const Component = isLink ? Link : "button"

  return (
    <Component
      className={`${className} ${isLink ? "link-class" : "button-class"}`} // Apply different classes if needed
      to={isLink ? to : undefined} // Only pass 'to' prop to Link
      {...restProps} // Spread the rest of the props
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </Component>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), // 'to' can be a string or an object as used in <Link>
}

export { Button }
