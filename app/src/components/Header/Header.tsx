import { ComponentPropsWithoutRef, forwardRef } from 'react';

export type Ref = HTMLElement;
export type Props = ComponentPropsWithoutRef<'header'>;

const Header = forwardRef<Ref, Props>((props, ref) => (
  <header ref={ref} {...props} />
));

export default Header;
