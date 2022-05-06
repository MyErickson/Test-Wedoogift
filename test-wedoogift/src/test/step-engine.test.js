import axios from 'axios';
import { searchCombination } from '../modules/step-engine/api/step-engine-api'
jest.mock('axios')

describe('api card',()=>{
    beforeEach(()=>{
        axios.mockClear()
    })

    test('should return combination', async ()=>{
        axios.get.mockResolvedValue({data:[{equal:{value:22,cards:22}}]})
        expect(await searchCombination(5,22)).toStrictEqual({data:[{equal:{value:22,cards:22}}]})
    })
})