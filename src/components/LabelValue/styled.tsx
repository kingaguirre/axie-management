import styled from 'styled-components';

interface IContainer {
  isReverse?: boolean;
  align?: 'left' | 'right';
  size?: 'small' | 'large' | undefined;
}
export const Container = styled.div<IContainer>`
  font-size: ${p => !!p.size ? p.size === 'large' ? 36 : 10 : 28}px;
  font-weight: 700;
  text-align: ${p => !!p.align ? p.align === 'left' ? 'left' : 'right' : 'center'};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${p => !!p.align ? p.align === 'left' ? 'flex-start' : 'flex-end' : 'center'};
  opacity: ${p => p.size !== 'small' ? 1 : .8};
  ${p => p.size !== 'small' ? `
    line-height: 1.2;
  ` : ''};
  a {
    opacity: 1;
    color: white;
  }
  > p {
    font-weight: 400;
    color: #a1a6b6;
    margin: 0;
    line-height: 1.2;
    font-size: ${p => !!p.size ? p.size === 'large' ? 14 : 8 : 10}px;
    width: 100%;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: ${p => !!p.align ? p.align === 'left' ? 'flex-start' : 'flex-end' : 'center'};
    text-align: ${p => !!p.align ? p.align === 'left' ? 'left' : 'right' : 'center'};
    > small {
      margin-left: 5px;
      font-size: 0.75em;
      font-weight: 700;
    }
  }
  ${p => p.isReverse ? `
    flex-direction: column-reverse;
  ` : ''}
`;