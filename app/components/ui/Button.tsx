import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface LinkButtonProps extends BaseButtonProps {
  href?: string;
  to?: string;
  as?: 'button';
}

interface RegularButtonProps extends BaseButtonProps {
  type?: 'button' | 'submit' | 'reset';
}

type ButtonProps = LinkButtonProps | RegularButtonProps;

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return 'href' in props || 'to' in props;
}

export const PrimaryButton: React.FC<ButtonProps & {
  variant?: 'default' | 'white' | 'large';
  icon?: LucideIcon;
  showArrow?: boolean;
}> = ({
  children,
  className = '',
  variant = 'default',
  icon: Icon,
  showArrow = true,
  ...props
}) => {
  // Create buttonProps with children included
  const buttonProps = { children, ...props };
  const baseClasses = "px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group";

  const variantClasses = {
    default: "bg-valencia-500 text-white hover:bg-valencia-600",
    white: "bg-white text-valencia-500 hover:bg-gray-100",
    large: "bg-valencia-500 text-white text-lg hover:bg-valencia-600"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (isLinkButton(buttonProps)) {
    const linkProps = buttonProps as LinkButtonProps;
    return (
      <a
        href={linkProps.href || linkProps.to}
        className={classes}
        onClick={linkProps.onClick}
      >
        {content}
      </a>
    );
  }

  const regularProps = buttonProps as RegularButtonProps;
  return (
    <button
      type={regularProps.type || 'button'}
      className={classes}
      onClick={regularProps.onClick}
      disabled={regularProps.disabled}
    >
      {content}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps & {
  variant?: 'default' | 'white';
  icon?: LucideIcon;
  showArrow?: boolean;
}> = ({
  children,
  className = '',
  variant = 'default',
  icon: Icon,
  showArrow = false,
  ...props
}) => {
  // Create buttonProps with children included
  const buttonProps = { children, ...props };
  const baseClasses = "px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center group";

  const variantClasses = {
    default: "border-2 border-valencia-500 text-valencia-500 hover:bg-valencia-500 hover:text-white",
    white: "border-2 border-white text-white hover:bg-white hover:text-valencia-500"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (isLinkButton(buttonProps)) {
    const linkProps = buttonProps as LinkButtonProps;
    return (
      <a
        href={linkProps.href || linkProps.to}
        className={classes}
        onClick={linkProps.onClick}
      >
        {content}
      </a>
    );
  }

  const regularProps = buttonProps as RegularButtonProps;
  return (
    <button
      type={regularProps.type || 'button'}
      className={classes}
      onClick={regularProps.onClick}
      disabled={regularProps.disabled}
    >
      {content}
    </button>
  );
};
