import axios from 'axios'

export const fetchFeedsAPI = page => axios.get(`https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_${ page }.json`)