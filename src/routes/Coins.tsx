import styled from "styled-components";
import {Link} from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet-async";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from './../routeAtoms';

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;


const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color:${p => p.theme.textColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a{
        transition: color 0.2s ease-in;
        display: flex;
        align-items: center;
        padding: 20px;
        border-radius: 15px;
    }
    &:hover {
        a {
            color: ${p => p.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
font-size: 48px;
    color: ${p => p.theme.accentColor};
`

const Loader = styled.span`
    text-align: center;
    display: block;
`

const Image = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`


interface Icoin {
    id: string,
      name: string,
      symbol: string,
      rank: number,
      is_new: boolean,
      is_active: boolean,
      type: string,
};


const Coins = () => {
    const {isLoading, data} = useQuery<Icoin[]>("allCoins",fetchCoins)
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom((prev) => !prev)
    // const [coins, setCoins] = useState<Icoin[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     (async() => {
    //       const response = await fetch("https://api.coinpaprika.com/v1/coins")
    //       const json = await response.json()
    //       setCoins(json.slice(0,100))
    //       setLoading(false);
    //     })()
    // },[])
    
    return <Container>
        <Helmet>
        <title>
        코인
        </title>
      </Helmet>
        <Header>
            <Title>코인</Title>
        <button onClick={toggleDarkAtom} >Toggle Mode</button>
        </Header>
        {isLoading ? <Loader>Loading...</Loader> : <CoinsList>
            {data?.slice(0,100).map((item) => <Coin key={item.id}>
                <Link to={`/${item.id}`} state={{id:item.id, name: item.name}}>
                    <Image src={`https://cryptocurrencyliveprices.com/img/${item.id}.png`} />
                {item.name} &rarr; 
                </Link>
                </Coin>)}
        </CoinsList>}
    </Container>
}

export default Coins