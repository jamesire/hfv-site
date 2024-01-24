import React, { useEffect, useState } from 'react'
import MerchData from '../assets/merch.csv';
import Papa from "papaparse"
import MerchItem from './MerchItem';

interface MerchData {
    name: string;
    img: string;
    link: string;
}

const Shop: React.FC = () => {
    const [csvData, setCsvData] = useState<MerchData[]>([]);
    
    useEffect(() => {
        fetchCsvData();
    }, []);

    const fetchCsvData = async () => {
        Papa.parse(MerchData, {
            header: true,
            download: true,
            skipEmptyLines: true,
            delimiter: ",",
            complete: (results: any) => {
                const showData: MerchData[] = results.data;
                console.log(showData)
                setCsvData(showData);
            },
          })
    }

  return (
    <div className='shop'>
      {csvData.map((item) => {
        return <MerchItem {...item} />
      })}
    </div>
  )
};

export default Shop;