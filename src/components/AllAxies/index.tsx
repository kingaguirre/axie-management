import { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import DATA from '../data';
import { AppContext } from '../Main';
import Axies from '../Info/Axies';
import Loader from '../Loader';
import * as SC from './styled';

export default () => {
  const { data } = useContext(AppContext)
  const [axies, setAxies] = useState<any | undefined>(undefined);

  useEffect(() => {
    Promise.all(
      DATA.map(item => getAxies(item.ronin))
    ).then((values) => {
      const addOwner = values.map((item: any, i) => {
        return item.map((subItem: any) => {
          return {
            ...subItem,
            owner: data[i].name
          }
        })
      })
      setAxies([].concat.apply([], addOwner));
    });
  }, []);

  const getAxies = async (ronin: string) => {
    if (!!ronin) {
      const axies = await fetch(`https://api.lunaciaproxy.cloud/_axies/${ronin}`);
      return Promise.all([await axies.json()]).then((response) => {
        if (!!response) {
          const axies = response[0].available_axies.results;
          return axies;
        }
      });
    }
  };

  return (
    <SC.Container>
      {!!axies ? (
        <Container>
          <Axies axies={axies}/>
        </Container>
      ) : <Loader/>}
    </SC.Container>
  )
}