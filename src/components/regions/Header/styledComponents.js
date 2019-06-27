import styled from 'styled-components';

const notForMobile = `
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;

  ${props => props.navigation && `
    margin-left: 107px;
    margin-right: auto;

    ${notForMobile}

    @media only screen and (max-width: 1024px) {
      margin-left: auto;
    }
  `}
`;

export const NavLink = styled.a`
  font-family: ${props => props.theme.fonts.primary};
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  margin-left: 24px;
`;

export const HeaderIcon = styled.img`
  margin-right: 22px;
`;

export const Delimeter = styled.span`
  width: 1px;
  height: 18px;
  margin: 0 27px;
  background: ${props => props.theme.colors.white};
`;

export const UserIcon = styled.img`
  margin-right: 8px;
  margin-left: 28px;
`;

export const DropIcon = styled.span`
  width: 5px;
  height: 5px;
  border-left: 1px solid ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.white};
  transform: rotate(-45deg);
`;

export const Chip = styled.div`
  color: ${props => props.theme.colors.bunker};
  background: ${props => props.theme.colors.white};
  border-radius: 7.5px;
  padding: 0 3px;
  font-family: ${props => props.theme.fonts.secondary};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 12px;
  line-height: 14px;

  ${notForMobile}
`;

export const ChipPart = styled.span`
  padding: 0 3px;
  border-left: 1px solid ${props => props.theme.colors.bunker};
  border-right: 1px solid ${props => props.theme.colors.bunker};

  ${props => props.first && `
    border-left: none;
  `}

  ${props => props.last && `
    border-right: none;
  `}
`;
