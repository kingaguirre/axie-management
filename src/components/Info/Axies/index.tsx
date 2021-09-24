import { Row, Col } from 'react-bootstrap';
import Panel from '../../Panel';
import LabelValue from '../../LabelValue';
import { getIconColor, getStatIcon } from './utils';
import * as SC from './styled';

export default (props: any) => {
  const { axies } = props;

  const Stat = (stat: any) => (
    <SC.StatContainer>
      <p>{stat.stat === 'hp' ? 'health' : stat.stat}</p>
      <div>
        {getStatIcon(stat.stat)}
        <span>{stat.value}</span>
      </div>
    </SC.StatContainer>
  );

  return (
    <SC.AxiesContainer>
      <SC.Title>Axies</SC.Title>
      <Row>
        {!!axies && !!axies.length ? axies.map((item: any, i: number) => (
          <Col md={6} lg={4} key={i}>
            <Panel>
              <SC.Axies>
                <SC.Header>
                  <SC.AxieIdName>
                    <SC.Id style={{backgroundColor: getIconColor(item.class)!.color}}>{`#${item.id}`}</SC.Id>
                    <span>{getIconColor(item.class).icon}{item.name || `#${item.id}`}</span>
                  </SC.AxieIdName>
                  <LabelValue
                    label="Breed count"
                    value={`${item.breedCount}/7`}
                    align="right"
                    size="small"
                  />
                </SC.Header>
                <SC.Body>
                  <img src={item.image}/>
                </SC.Body>
                <SC.Footer>
                  {Object.keys(item.stats).map((key: any, si: number) => (
                    <Stat
                      key={si}
                      stat={key}
                      value={item.stats[key]}
                    />
                  ))}
                </SC.Footer>
              </SC.Axies>
            </Panel>
          </Col>
        )) : <Col>Loading...</Col>}
      </Row>
    </SC.AxiesContainer>
  )
}