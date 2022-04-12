import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './../routeAtoms';

interface ChartProps {
    coinId: string;
};

interface IHistorical {
    time_open: string;
    time_close: string;
    open:number;
    high:number;
    low:number;
    close:number;
    volume:number;
    market_cap:number;
}

const Chart = () => {
    const {coinId} = useOutletContext<ChartProps>();
    const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId],() => fetchCoinHistory(coinId), {refetchInterval: 10000})
    const isDark = useRecoilValue(isDarkAtom)
return <div>
        {isLoading ? "Loading chart..." : <ApexChart
         type="line"
         
         series={[
            {  
                name:"price",
                data: data?.map(item => item.close) as number[]
            },
         ]}
         options={{
             theme: {
                 mode: isDark ? "dark" : "light"
             },
            chart: {
                height: 300,
                width: 500,
                toolbar: {
                    show:false
                },
                background: "transparent",
                animations: {
                    enabled:false
                }
            },
            stroke: {
                curve:"smooth",
                width: 3,
            },
            grid: {
                show:false
            },
            yaxis:{
                show:false
            },
            xaxis:{
                type:"datetime",
                 labels:{show:false},
                  axisTicks:{show:false},
                  axisBorder:{show:false},
                  categories: data?.map(item => item.time_close),
                  
                },
            fill: {
                type:"gradient",
                 gradient: {gradientToColors:["#0be881"],stops:[0,100]}
                },
            colors:["#0fbcf9"],
            tooltip:{
                y:{formatter: (value) =>`$ ${value.toFixed(2)}`}
            }
        }} />}
        {/* {isLoading ? "Loading chart..." : 
        <ApexChart
            type="line"
            series={[
                {  
                    name:"price",
                    data: data?.map(item => item.close) as number[]
                },
            ]}
            options={{
                theme: {
                    mode:"dark"
                },
                chart: {
                   type: "candlestick"
                },
                stroke: {
                    curve:"smooth",
                    width: 3,
                },
                grid: {
                    show:false
                },
                yaxis:{
                    tooltip: {
                        enabled:true
                    }
                },
                xaxis:{
                   type:"datetime"
                    },
                // fill: {
                //     type:"gradient",
                //     gradient: {gradientToColors:["#0be881"],stops:[0,100]}
                //     },
                colors:["#0fbcf9"],
                tooltip:{
                    y:{formatter: (value) =>`$ ${value.toFixed(2)}`}
                }
            }} />} */}
    </div>
}
export default Chart;