import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};

  :not(:first-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const Field = styled.input`
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  border: ${p => p.theme.borders.slim} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.input};

  :hover,
  :focus {
    border: ${p => p.theme.borders.slim} ${p => p.theme.colors.accent};
  }
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.accent};
  background: transparent;
  border: ${p => p.theme.borders.slim} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.middle};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.sx};
  text-transform: capitalize;

  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
    border: ${p => p.theme.borders.slim} ${p => p.theme.colors.hover};
  }
`;
