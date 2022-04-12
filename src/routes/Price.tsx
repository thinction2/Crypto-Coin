import { useLocation } from 'react-router-dom';
import  styled  from 'styled-components';



interface RouteState {
    state: {
      data : {
          USD :{
            ath_date: string;
            ath_price:number;
            market_cap:number;
            market_cap_change_24h:number;
            percent_change_1h:number;
            percent_change_1y:number;
            percent_change_6h:number;
            percent_change_7d:number;
            percent_change_12h:number;
            percent_change_15m:number;
            percent_change_24h:number;
            percent_change_30d:number;
            percent_change_30m:number;
            percent_from_price_ath:number;
            price:number;
            volume_24h:number;
            volume_24h_change_24h:number;
          }
        }
    }
}


const ItemWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 12px 8px;
background-color: #00b894;
margin-bottom: 16px;
border-radius: 10px;
`;

const Label = styled.span`
    display: block;
`


const Value = styled.span`
    display: block;
`


const Price = () => {
    const {state: {data}} = useLocation() as unknown as RouteState;
    return (
    <>
    <ItemWrapper>
        <Label>Change Rate(last 30m) :</Label>
        <Value>{`${data.USD.percent_change_30m *100} %`}</Value>
    </ItemWrapper>
    <ItemWrapper>
        <Label>Change Rate(last 1h) :</Label>
        <Value>{`${data.USD.percent_change_1h *100} %`}</Value>
    </ItemWrapper>
    <ItemWrapper>
        <Label>Change Rate(last 6h) :</Label>
        <Value>{`${data.USD.percent_change_6h *100} %`}</Value>
    </ItemWrapper>
    <ItemWrapper>
        <Label>Change Rate(last 24h) :</Label>
        <Value>{`${data.USD.market_cap_change_24h *100} %`}</Value>
    </ItemWrapper>
    <ItemWrapper>
        <Label>Change Rate(last 7d) :</Label>
        <Value>{`${data.USD.percent_change_7d *100} %`}</Value>
    </ItemWrapper>
    <ItemWrapper>
        <Label>Change Rate(last 30d) :</Label>
        <Value>{`${data.USD.percent_change_30d *100} %`}</Value>
    </ItemWrapper>
    </>)
}
export default Price;