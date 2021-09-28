import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Panel from '../../Panel';
import LabelValue from '../../LabelValue';
import Loader from '../../Loader';
import ControlContainer from '../../Dashboard/ControlContainer';
import { getIconColor, getStatIcon } from './utils';
import * as SC from './styled';

export default (props: any) => {
  const { axies } = props;
  const [axieClass, setAxieClass] = useState<string>('');
  const [breedCount, setBreedCount] = useState<string>('');
  const getFilter = !!axies ? Array.from(new Set(axies.map((x: any) => x.class))) : [];

  const Stat = (stat: any) => (
    <SC.StatContainer>
      <p>{stat.stat === 'hp' ? 'health' : stat.stat}</p>
      <div>
        {getStatIcon(stat.stat)}
        <span>{stat.value}</span>
      </div>
    </SC.StatContainer>
  );

  const filteredAxies = () => {
    return !!axies && !!axies.length ? axies
    .filter((item: any) => axieClass !== '' ? axieClass === 'Egg' ? item.class === null : item.class === axieClass : true)
    .filter((item: any) => breedCount !== '' ? `${item.breedCount}` === breedCount : true) : [];
  }

  return (
    <SC.AxiesContainer>
      {!!axies && (
        <Row>
          <Col>
            <SC.Title>Axies ({!!filteredAxies() && filteredAxies().length ? filteredAxies().length : 0})</SC.Title>
          </Col>
          <ControlContainer
            sizes={{xl: 4, lg: 4, md: 6}}
            title="Axie Class"
          >
            <Form.Control as="select" size="sm" onChange={(e) => setAxieClass(e.target.value)}>
              <option value=''>-- All --</option>
              {getFilter.map((item: any, i: number) => (
                <option key={i} value={item}>{item === null ? 'Egg' : item}</option>
              ))}
            </Form.Control>
          </ControlContainer>
          <ControlContainer
            sizes={{xl: 4, lg: 4, md: 6}}
            title="Breed Count"
          >
            <Form.Control as="select" size="sm" onChange={(e) => setBreedCount(e.target.value)}>
              <option value=''>-- All --</option>
              {Array(7).fill('').map((_: any, i: number) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </Form.Control>
          </ControlContainer>
        </Row>
      )}
      <Row>
        {!!axies && !!axies.length ? filteredAxies().map((item: any, i: number) => (
          <Col md={6} lg={4} key={i}>
            <Panel onClick={() => window.open(`https://marketplace.axieinfinity.com/axie/${item.id}`, '_blank')}>
              <SC.Axies>
                <SC.Header>
                  <SC.AxieIdName>
                    <SC.Id style={{backgroundColor: getIconColor(item.class)!.color}}>{`#${item.id}`}</SC.Id>
                    <span>{getIconColor(item.class).icon}{item.name || `#${item.id}`}</span>
                  </SC.AxieIdName>
                  <SC.RightInfo>
                    <LabelValue
                      label="Breed count"
                      value={`${item.breedCount}/7`}
                      align="right"
                      size="small"
                    />
                    {!!item.owner && (
                      <LabelValue
                        label="Owner"
                        value={item.owner}
                        align="right"
                        size="small"
                      />
                    )}
                  </SC.RightInfo>
                </SC.Header>
                <SC.Body>
                  <img src={item.image} alt={item.name}/>
                </SC.Body>
                {!!item.class && (
                  <SC.Footer>
                    {Object.keys(item.stats).map((key: any, si: number) => (
                      <Stat
                        key={si}
                        stat={key}
                        value={item.stats[key]}
                      />
                    ))}
                  </SC.Footer>
                )}
              </SC.Axies>
            </Panel>
          </Col>
        )) : <Loader>Loading Axies...</Loader>}
      </Row>
    </SC.AxiesContainer>
  )
}