import React from 'react';

import logo from '@/assets/logo.svg';
import name from '@/assets/name.svg';

import searchIcon from '@/assets/icons/search.svg';
import starIcon from '@/assets/icons/star.svg';
import userIcon from '@/assets/icons/user.svg';

import {
  Header,
  Section,
  NavLink,
  HeaderIcon,
  Delimeter,
  UserIcon,
  DropIcon,
  Chip,
  ChipPart,
} from './styledComponents';

const HeaderComponent = () => {
  return (
    <Header>
      <Section href="/">
        <HeaderIcon alt="Q_TOR" src={logo} />
        <HeaderIcon alt="Q_TOR" src={name} />
        <Chip>
          <ChipPart first>VE3</ChipPart>
          <ChipPart last>Q17</ChipPart>
        </Chip>
      </Section>
      <Section navigation notForMobile>
        <NavLink href="#">CHECKS</NavLink>
        <NavLink href="#">SCHEDULING</NavLink>
        <NavLink href="#">REPORTS</NavLink>
      </Section>
      <Section>
        <img alt="Search" src={searchIcon} />
        <Delimeter />
        <img alt="Favorite" src={starIcon} />
        <UserIcon alt="User" src={userIcon} />
        <DropIcon />
      </Section>
    </Header>
  );
};

export default React.memo(HeaderComponent);
