import getData from '../../../api/get-data-api/getData';
import type { DataInfo } from './TypesData';

async function dataInfo(): Promise<DataInfo> {
  return await getData(
    'https://raw.githubusercontent.com/iKuzenkov/portfolio-api-data/refs/heads/main/auto-clicker/how-to-use.json'
  );
}
export default dataInfo;
