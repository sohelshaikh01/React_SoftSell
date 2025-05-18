import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Logo = ({
    className = "",
    ...props
}) => {
  return (
    <div>
      <RiSecurePaymentFill className={` ${className}`} {...props} />
    </div>
  )
}

export default Logo;
