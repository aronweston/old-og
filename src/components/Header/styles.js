import tw from 'twin.macro';
import { Link } from 'gatsby';

import HeaderLogo from '../../assets/svg/header-logo.svg';
import Menu from '../../assets/svg/menu.svg';
import Phone from '../../assets/svg/phone.svg';

export const Header = tw.header`fixed w-full z-10 top-0 bg-transparent`;
export const Container = tw.div`container mx-auto flex justify-between justify-items-stretch py-4`;
export const Icon = tw.div`inline-flex`;
export const IconContainer = tw.div`inline-flex gap-3`;
export const NavLink = tw(Link)`inline-flex`;

export { HeaderLogo, Menu, Phone };
