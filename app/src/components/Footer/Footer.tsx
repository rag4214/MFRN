import { ComponentPropsWithoutRef, forwardRef } from 'react';

export type Ref = HTMLElement;
export type Props = ComponentPropsWithoutRef<'footer'>;

const Footer = forwardRef<Ref, Props>((props, ref) => (
  <footer ref={ref} {...props} />
));

export default Footer;
