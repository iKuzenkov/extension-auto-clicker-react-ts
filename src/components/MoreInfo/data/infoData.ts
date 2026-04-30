import getFetchData from '../../../api/get-fetch-data-api/getFetchData';
import type { DataInfo } from './TypesData';

async function infoData(): Promise<DataInfo> {
  return await getFetchData(
    'https://raw.githubusercontent.com/iKuzenkov/portfolio-api-data/refs/heads/main/auto-clicker/how-to-use.json'
  );
}
export default infoData;
