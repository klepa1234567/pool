import {FC, PropsWithChildren} from "react";
import classNames from "classnames";
import style from './button.module.scss';

type buttonProps = PropsWithChildren<{
   view: 'main' | 'secondary'
}>;

const Button: FC<buttonProps> = ({ children, view }) => {
   const buttonClasses = classNames({
      [style.main] : view === 'main',
      [style.secondary]: view === 'secondary'
   });


   return <button className={buttonClasses}>{children}</button>;
}

export default Button;
