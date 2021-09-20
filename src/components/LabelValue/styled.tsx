import styled from 'styled-components';

interface IContainer {
  isReverse?: boolean;
  isLarge?: boolean;
  align?: 'left' | 'right'
}
export const Container = styled.div<IContainer>`
  font-size: ${p => p.isLarge ? 28 : 10}px;
  font-weight: 700;
  text-align: ${p => !!p.align ? p.align === 'left' ? 'left' : 'right' : 'center'};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${p => !!p.align ? p.align === 'left' ? 'flex-start' : 'flex-end' : 'center'};
  opacity: ${p => p.isLarge ? 1 : .8};
  > p {
    font-weight: 400;
    opacity: 0.8;
    margin: ${p => p.isLarge ? -10 : -2}px 0;
    font-size: ${p => p.isLarge ? 10 : 8}px;
    justify-content: ${p => !!p.align ? p.align === 'left' ? 'flex-start' : 'flex-end' : 'center'};
    width: 100%;
    white-space: nowrap;
    display: flex;
    align-items: center;
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