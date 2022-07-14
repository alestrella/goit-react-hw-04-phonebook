import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  border-bottom: ${p => p.theme.borders.slim} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.none};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Name = styled.span`
  color: ${p => p.theme.colors.text};
  /* font-weight: ${p => p.theme.fontWeights.semiBold}; */
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Number = styled.span`
  color: ${p => p.theme.colors.textSecondary};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

// export const Button = styled.button`
//   margin-left: auto;
//   padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
//   color: ${p => p.theme.colors.white};
//   background-color: ${p => p.theme.colors.red};
//   border: ${p => p.theme.borders.none};
//   border-radius: ${p => p.theme.radii.normal};
//   font-family: ${p => p.theme.fonts.body};
//   font-size: ${p => p.theme.fontSizes.sx};
//   text-transform: uppercase;

//   :hover {
//     box-shadow: ${p => p.theme.shadows.card};
//   }
// `;
