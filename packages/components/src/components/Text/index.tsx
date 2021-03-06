import styled from 'styled-components';
import css from '@styled-system/css';
import { Element } from '../Element';

const variants = {
  body: 'inherit',
  muted: 'mutedForeground',
  danger: 'errorForeground',
};

export const Text = styled(Element).attrs({ as: 'span' })<{
  size?: number;
  align?: string;
  weight?: string;
  variant?: 'body' | 'muted' | 'danger';
}>(({ size, align, weight, variant = 'body', ...props }) =>
  css({
    fontSize: size || 'inherit', // from theme.fontSizes
    fontWeight: weight || null, // from theme.fontWeights
    color: variants[variant],
    textAlign: align || 'left',
  })
);
