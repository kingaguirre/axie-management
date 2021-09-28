import * as SC from './styled';

interface Iprops {
  children?: any
}
export default (props: Iprops) => <SC.Loader>{props.children}</SC.Loader>
